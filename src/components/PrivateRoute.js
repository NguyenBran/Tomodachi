import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import helper from '../utills/helper';

const PrivateRoute = ({component: Component, ...rest}) => {
    return(
        <div style={{height: '100%'}}>
            <Route {...rest} render= {props => (
                helper.isLoggedIn() ? <Component {...props}/> : <Redirect to='/login'/>
            )}/>
        </div>
    );
};

export default PrivateRoute;