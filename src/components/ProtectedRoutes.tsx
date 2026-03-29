import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/authContext";
import type { Props } from "../interfaces/userInterface";

export const ProtectedRoute = ({ allowedRoles }: Props) => {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/login" replace />;
    };

    if (allowedRoles && !allowedRoles.includes(user.rol)) {
        return <Navigate to="/404" replace />;
    };

    return <Outlet />
};