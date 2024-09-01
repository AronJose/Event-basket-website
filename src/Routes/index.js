import React, { useEffect } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie'
import SingUp from '../Pages/Auth/SignUp';
import PublicRoute from './PublicRoutes';
import SignIn from '../Pages/Auth/SignIn';
import PrivateRoutes from '../Routes/PrivateRoutes';
import UserHome from '../Pages/User/UserHome';


function Router() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        console.log("location", location.pathname)
        const authToken = Cookies.get('authToken');
        if (location.pathname === '/signup') {
            return navigate("/signup")
        }
        if (authToken !== undefined) {
            console.log("user loggedin")
            navigate("/home")
        } else {
            navigate("/");
        }
    }, []);


    return (
        <Routes>
            <Route path="/" element={<PublicRoute component={SignIn} />} />
            <Route path="/signup" element={<PublicRoute component={SingUp} />} />
            <Route path="/home" element={<PrivateRoutes header={true} component={UserHome} />} />

        </Routes>
    )
}

export default Router
