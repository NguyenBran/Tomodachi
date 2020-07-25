import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import helper from '../utills/helper';

const PublicRoute = ({component: Component, ...rest}) => {
    return(
        <div>
            <Route {...rest} render={props => (
                helper.isLoggedIn() ?
                    <Redirect to='/' /> : <Component {...props} />
            )} />
        </div>
    );

};

export default PublicRoute;