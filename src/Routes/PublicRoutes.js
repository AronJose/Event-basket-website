import React from "react";
import { Navigate } from "react-router-dom";
import { useCookies } from 'react-cookie'
import Layout from "./Layout";
function PublicRoutes({  component: Component, header }) {
    const [cookies] = useCookies("authToken");
    console.log(cookies.authToken, "cookies");

    return (
    <>
    <Layout header={header}/>
        {cookies.authToken &&
        
        <Component /> 
        // <Navigate to={{ pathname: '/home' }} />
        }
</>
    )

}
export default PublicRoutes;
