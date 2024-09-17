import React from 'react';
import { Routes, Route,Navigate} from 'react-router-dom';
// import Cookies from 'js-cookie';
import SignUp from '../Pages/Auth/SignUp';
import SignIn from '../Pages/Auth/SignIn';
import PublicRoute from './PublicRoutes';
import UserHome from '../Pages/User/UserHome';
import PrivateRoutes from './PrivateRoutes';
import AddEvents from '../Pages/components/AddEvents';

function Router() {
    return (
        <Routes>
            <Route path="/" element={<PublicRoute header={true} component={UserHome} />} />
            <Route path="/login" element={<PublicRoute component={SignIn} />} />
            <Route path="/signup" element={<PublicRoute component={SignUp} />} />
            <Route path="/home" element={<PrivateRoutes  header={true} component={UserHome} />} />
            <Route path="/addEvent" element={<PrivateRoutes header={true}  component={AddEvents}/>}/>
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}

export default Router;
