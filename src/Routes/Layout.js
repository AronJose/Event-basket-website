import React from 'react';
import Header from '../Components/Header';
// import SubHeader from '../Components/SubHeader';
// import Footer from '../Components/Footer/Footer';

function Layout({ children, header }) {
    return (
        <div>
            {header ? <div>

                <Header />
                <div className='pt-[80px]'>
                <main>{children}</main>
                </div>
                {/* <Footer /> */}
            </div>
                :

                <div>
                    {children}
                </div>}

        </div>
    );
}

export default Layout;
