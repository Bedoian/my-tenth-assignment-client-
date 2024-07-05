import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <div className="flex justify-center"><span className="loading loading-bars loading-xs"></span>
            <span className="loading loading-bars text-purple-600 loading-sm"></span>
            <span className="loading loading-bars text-purple-600 loading-md"></span>
            <span className="loading loading-bars text-purple-600 loading-lg"></span></div>
    }

    if (user) {
        return children
    }

    return <Navigate to='/login'></Navigate>
};

export default PrivetRoute;