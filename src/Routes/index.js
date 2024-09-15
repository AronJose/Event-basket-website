import React from 'react';
import { Routes, Route} from 'react-router-dom';
// import Cookies from 'js-cookie';
import SignUp from '../Pages/Auth/SignUp';
import SignIn from '../Pages/Auth/SignIn';
import PublicRoute from './PublicRoutes';
import UserHome from '../Pages/User/UserHome';
import PrivateRoutes from './PrivateRoutes';

function Router() {
    return (
        <Routes>
            <Route path="*" element={<PublicRoute header={true} component={UserHome} />} />
            <Route path="/login" element={<PublicRoute component={SignIn} />} />
            <Route path="/signup" element={<PublicRoute component={SignUp} />} />
            <Route path="/home" element={<PrivateRoutes  header={true} component={UserHome} />} />
            
        </Routes>
    );
}

export default Router;
