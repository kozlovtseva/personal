import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

const Layout: React.FC<{}> = () => {
    return (
        <div>
            <Header />
            <h1>My App</h1>
            <Footer />
        </div>
    );
};

export default Layout;
