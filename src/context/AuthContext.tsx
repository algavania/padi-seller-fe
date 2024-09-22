import { createContext, useState, useContext, ReactNode, useEffect } from "react";
import { login, register, logout } from "../api/authApi";

type AuthContextType = {
  isAuthenticated: boolean;
  user: { email: string } | null;
  loading: boolean;
  error: string | null;
  loginUser: (email: string, password: string) => Promise<void>;
  registerUser: (email: string, password: string) => Promise<void>;
  logoutUser: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<{ email: string } | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const userEmail = localStorage.getItem("userEmail");
    if (token && userEmail) {
      setIsAuthenticated(true);
      setUser({ email: userEmail });
    }
  }, []);

  const loginUser = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const res = await login(email, password);
      console.log('res auth', res);
      localStorage.setItem("authToken", res.data.access_token);
      localStorage.setItem("userEmail", res.data.email);
      setIsAuthenticated(true);
      setUser({ email });
    } catch (err: any) {
      setError(err.response.data.meta.message.toString());
    } finally {
      setLoading(false);
    }
  };

  const registerUser = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const { token } = await register(email, password);
      localStorage.setItem("authToken", token);
      localStorage.setItem("userEmail", email);
      setIsAuthenticated(true);
      setUser({ email });
    } catch (err) {
      setError("Registration failed");
    } finally {
      setLoading(false);
    }
  };

  const logoutUser = () => {
    logout(); 
    localStorage.removeItem("authToken");
    localStorage.removeItem("userEmail");
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        loading,
        error,
        loginUser,
        registerUser,
        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};