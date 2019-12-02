import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Layout from './Layout';
import './App.scss';

const App: React.FC = () => {
    return (
        <div className="App">
            <Router>
                <Layout />
            </Router>
        </div>
    );
};

export default App;
