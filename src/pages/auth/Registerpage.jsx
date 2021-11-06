import React from 'react';
import Register from '../../components/container/register';
import { useHistory } from 'react-router';

const Registerpage = () => {
    const history = useHistory();
    if (localStorage.getItem('user') !== null) {
        history.push('/ofertas');
    }
    return (
        <Register />
    );
}

export default Registerpage;
