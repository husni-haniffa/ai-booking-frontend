import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ 
  isAllowed, 
  redirectPath, 
  children 
}: {
  isAllowed: boolean | (() => boolean);
  redirectPath: string;
  children: React.ReactNode;
}) => {
  // Handle both function and direct boolean value
  const allowed = typeof isAllowed === 'function' ? isAllowed() : isAllowed;
  
  if (!allowed) {
    return <Navigate to={redirectPath} replace />;
  }
  
  return children;
};

export default ProtectedRoute;