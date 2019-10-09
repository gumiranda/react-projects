import React from 'react';

import { Router } from 'react-router-dom';
import './config/ReactotronConfig';
import Routes from './routes';
import GlobalStyle from './styles/global';
import history from './services/history';

function App() {
    return (
        <>
            <Router history={history}>
                <Routes />
            </Router>
            <GlobalStyle />
        </>
    );
}

export default App;
