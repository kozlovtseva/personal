import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Vitae from './containers/Vitae';

const Layout: React.FC<{}> = () => {
    return (
        <div>
            <Header />
            <h1>My App</h1>
            <Vitae />

            <Footer />
        </div>
    );
};

export default Layout;
