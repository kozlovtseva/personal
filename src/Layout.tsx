import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './containers/header/Header';
import Footer from './components/footer/Footer';
import Vitae from './containers/Vitae';
import Portfolio from './containers/Portfolio';
import Certificates from './containers/Certificates';
import Contacts from './components/contacts/Contacts';

const Layout: React.FC = () => {
    return (
        <>
            <Header />
            <Switch>
                <Route path="/vitae">
                    <Vitae />
                </Route>
                <Route path="/portfolio">
                    <Portfolio />
                </Route>
                <Route path="/certificates">
                    <Certificates />
                </Route>
                <Route path="/contacts">
                    <Contacts />
                </Route>
                <Route path="/">
                    <Redirect to="/vitae" />
                </Route>
            </Switch>
            <Footer />
        </>
    );
};

export default Layout;
