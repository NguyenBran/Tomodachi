import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Game from './Game';


const PrivateRoute = ({component: Component, ...rest}) => {
    const isLogin = () => {
        console.log('check login');
        if (sessionStorage.getItem('user') == null){
            return false;
        }
        return true;
    }

    return(
        <div>
            <Route render= {props => (
                isLogin() ? <Component /> : <Redirect to='/login'/>
            )}/>
        </div>
    );
};

export default PrivateRoute;