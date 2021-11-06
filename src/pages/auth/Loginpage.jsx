import React from 'react';
import { useHistory } from 'react-router-dom';
import Login from '../../components/container/login';

const Loginpage = () => {
    const history = useHistory();
    if (localStorage.getItem('user') !== null) {
        console.log("hello",localStorage.getItem('user'))
        console.log("LOL")
        history.push('/ofertas');
    }
    return (
        <Login />
    );
}

export default Loginpage;
