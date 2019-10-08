import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Hooks from './pages/Hooks';
import Main from './pages/Main';
import Repository from './pages/Repository';

export default function Routes() {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Hooks} />
                <Route path="/main" component={Main} />
                <Route path="/repository/:repository" component={Repository} />
            </Switch>
        </BrowserRouter>
    );
}
