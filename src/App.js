import React from 'react';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import './config/ReactotronConfig';
import { store, persistor } from './store'; // esse import deve necessariamente vir depois do import do reactotron
import Routes from './routes';
import GlobalStyle from './styles/global';
import history from './services/history';

function App() {
    return (
        <>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <Router history={history}>
                        <Routes />
                    </Router>
                    <GlobalStyle />
                    <ToastContainer autoClose={3000} />
                </PersistGate>
            </Provider>
        </>
    );
}

export default App;
