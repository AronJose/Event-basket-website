import React, { useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';
import SignUp from '../Pages/Auth/SignUp';
import SignIn from '../Pages/Auth/SignIn';
import PublicRoute from './PublicRoutes';
import UserHome from '../Pages/User/UserHome';
import PrivateRoutes from './PrivateRoutes';

function Router() {
    // const navigate = useNavigate();
    // const location = useLocation();

    // useEffect(() => {
    //     const authToken = Cookies.get('authToken');
    //     if (authToken && (location.pathname === '/login' || location.pathname === '/signup')) {
    //         navigate("/home");
    //     }else{
    //         navigate("/home");
    //     }
    // }, [location.pathname, navigate]);

    return (
        <Routes>
            <Route path="*" element={<PublicRoute header={true} component={UserHome} />} />
            <Route path="/login" element={<PublicRoute component={SignIn} />} />
            <Route path="/signup" element={<PublicRoute component={SignUp} />} />
            <Route path="/home" element={<PublicRoute  header={true} component={UserHome} />} />
            
        </Routes>
    );
}

export default Router;
