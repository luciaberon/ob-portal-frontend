import http from '../utils/config/axios.config';
import axios from 'axios';


// Obtain all Offers
export const getAllOffers = () => {  
    return http.get('/ofertas');           
} 


// Obtain Offer by ID
export const getOfferByID = (id) => {
    return http.get(`/ofertas/${id}`);
} 


// Obtain Technologies
export const getTechnologies = () => {
    return http.get('/tecnologias');
}


// AUTH requests

const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
}


const login = async (data) => {
    const response = await axios.post('https://proyecto-ofertas-ob.herokuapp.com/api/login', data, {
        headers: headers,
    })  

    if (response.data.token) {
        localStorage.setItem("user",response.data.token)
    }
}

const logout = () => {
    localStorage.removeItem('user')
}


const register = data => {
    axios.post('https://proyecto-ofertas-ob.herokuapp.com/api/register',data)
}

// Authentication service
export const authService = {
    register,
    login,
    logout,
};


http.interceptors.request.use(function (config) {
    let token = localStorage.getItem('user')

    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});
