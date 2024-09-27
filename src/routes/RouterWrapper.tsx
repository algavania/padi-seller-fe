import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import LoginIntroPage from "@/features/auth/LoginIntroPage";
import SellerLoginPage from "@/features/auth/SellerLoginPage";
import DashboardPage from "@/features/dashboard/DashboardPage";
import { useAuth } from "@/context/AuthContext";
import { ProtectedRoute } from "./ProtectedRoute";
import AllOrderPage from "@/features/dashboard/AllOrderPage";

export const RouterWrapper = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isAuthenticated) {
      if (location.pathname !== '/dashboard' && location.pathname !== '/orders') {
        navigate('/dashboard');
      }
    }
  }, [isAuthenticated, navigate, location.pathname]); 

  return (
    <Routes>
      <Route path="/" element={<LoginIntroPage />} />
      <Route path="/seller-login" element={<SellerLoginPage />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/orders"
        element={
          <ProtectedRoute>
            <AllOrderPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};
