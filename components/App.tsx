import React from 'react';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import UsersPage from './UsersPage';
import ManageUserPage from "./ManageUserPage";
import NotFoundPage from "./NotFoundPage";
import Header from './common/Header';
import { Route, Switch, Redirect } from "react-router-dom";


function App() {
    return (
        <div className='container-fluid'>
            <Header />
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/users" component={UsersPage} />
                <Route path="/about" component={AboutPage} />
                {/* Switch statement works like normal Switch-Case
                so Route with extra param should be put above normal
                route to avoid conflict */}
                <Route path="/user/:id" component={ManageUserPage} />
                <Route path="/user/" component={ManageUserPage} />
                {/* Redirect from="/about-page" to="/about" */}
                <Redirect from="/about-page" to="/about"/>
                {/* Will show NotFoundPage if all of the above
                link not match */}
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    );
}

export default App;