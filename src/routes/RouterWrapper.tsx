import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import LoginIntroPage from "@/features/auth/LoginIntroPage";
import SellerLoginPage from "@/features/auth/SellerLoginPage";
import DashboardPage from "@/features/dashboard/DashboardPage";
import { useAuth } from "@/context/AuthContext";
import { ProtectedRoute } from "./ProtectedRoute";

export const RouterWrapper = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

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
    </Routes>
  );
};
