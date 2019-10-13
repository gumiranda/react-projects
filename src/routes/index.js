import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route
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
            </Switch>
        </BrowserRouter>
    );
}
