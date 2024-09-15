import React from 'react';
import Header from '../Components/Header';
// import SubHeader from '../Components/SubHeader';
// import Footer from '../Components/Footer/Footer';

function Layout({ children,header }) {
    return (
        <>
            {header ? <div>
           
                <Header />
                {/* <SubHeader/> */}
                <main>{children}</main>
                {/* <Footer /> */}
            </div>
                :

                <div>
                    {children}
                </div>}

            </>
    );
}

export default Layout;
