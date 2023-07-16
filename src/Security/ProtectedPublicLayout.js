import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import PublicHeader from "../Components/PublicHeader";

export default function ProtectedPublicLayout() {
    const { user } = useAuth();

    if (user) {
        return <Navigate to="/productTypes" />;
    }

    return (
        <div>
            <PublicHeader />
            <Outlet />
        </div>
    )
};