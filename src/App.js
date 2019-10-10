import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import './config/ReactotronConfig';
import store from './store'; // esse import deve necessariamente vir depois do import do reactotron
import Routes from './routes';
import GlobalStyle from './styles/global';
import history from './services/history';

function App() {
    return (
        <>
            <Provider store={store}>
                <Router history={history}>
                    <Routes />
                </Router>
                <GlobalStyle />
            </Provider>
        </>
    );
}

export default App;
