import { Navigate, Outlet } from "react-router-dom";
import Header from "../Components/Header";
import useAuth from "../Hooks/useAuth";

export default function ProtectedLayout() {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/login" />;
    }

    return (
        <div>
            <Header />
            <div className="m-4">
                <Outlet />
            </div>
        </div>
    )
};