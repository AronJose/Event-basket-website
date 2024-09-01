import React from "react";
import { Navigate } from "react-router-dom";
import { useCookies } from 'react-cookie'
function PublicRoutes({ component: Component }) {
    const [cookies] = useCookies("authToken");
    console.log(cookies.authToken, "cookies");

    return (!cookies.authToken ?
        
        <Component /> :
        <Navigate to={{ pathname: '/' }} />

    )

}
export default PublicRoutes;
