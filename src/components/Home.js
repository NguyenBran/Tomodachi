import React from 'react';
import Game from './Game';

const Home = () => {
    return (
        <Game id={sessionStorage.getItem("id")}/>
    );
};

export default Home;