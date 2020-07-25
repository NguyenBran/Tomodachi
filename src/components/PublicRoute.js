import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import helper from '../utils/helper';

const PublicRoute = ({component: Component, ...rest}) => {
    return(
        <div style={{height: '100%'}}>
            <Route {...rest} render={props => (
                helper.isLoggedIn() ?
                    <Redirect to='/' /> : <Component {...props} />
            )} />
        </div>
    );

};

export default PublicRoute;