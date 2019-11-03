import React from 'react';
import { Router, Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';
import history from '~/services/history';

export default function Routes() {
    /* <Route
                    path={`${process.env.PUBLIC_URL}/dashboard`}
                    component={Dashboard}
                    isPrivate
                />
                <Route
                    path={`${process.env.PUBLIC_URL}/register`}
                    component={SignUp}
                />
                <Route
                    path={`${process.env.PUBLIC_URL}/`}
                    exact
                    component={SignIn}
                />
                <Route
                    path={`${process.env.PUBLIC_URL}/profile`}
                    component={Profile}
                    isPrivate
                />
                <Route
                    path={`${process.env.PUBLIC_URL}/`}
                    component={() => <h1>404</h1>}
                />
                */
    return (
        <Router history={history}>
            <Switch>
                <Route path="/dashboard" component={Dashboard} isPrivate />
                <Route path="/register" component={SignUp} />
                <Route path="/" exact component={SignIn} />
                <Route path="/profile" component={Profile} isPrivate />

                <Route path="/" component={() => <h1>404</h1>} />
            </Switch>
        </Router>
    );
}
