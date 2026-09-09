import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  // Temporary authentication state
  const isAuthenticated = false;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}