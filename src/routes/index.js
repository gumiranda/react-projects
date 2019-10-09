import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';

import Main from '~/pages/Main';
import Repository from '~/pages/Repository';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/dashboard" component={Dashboard} isPrivate />
                <Route path="/register" component={SignUp} />
                <Route path="/" exact component={SignIn} />
                <Route path="/profile" component={Profile} isPrivate />

                <Route path="/main" component={Main} />
                <Route path="/" component={()=> <h1>404</h1>} />
                <Route path="/repository/:repository" component={Repository} />
            </Switch>
        </BrowserRouter>
    );
}
