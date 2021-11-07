import http from '../utils/config/axios.config';
import axios from 'axios';
import Cookies from 'js-cookie';


// http.interceptors.request.use(request => {
//     console.log("TOKEN",localStorage.getItem('user'))
//     console.log('Starting Request', JSON.stringify(request, null, 2))
//     return request
//   })
  
//   http.interceptors.response.use(response => {
//     console.log('Response:', JSON.stringify(response, null, 2))
//     return response
//   })

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

// Add Technoglies
export const addTechnologies = data => {
    return http.post('/tecnologias', data)
}


const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
}


const login = data => {
    
    axios.post('https://proyecto-ofertas-ob.herokuapp.com/api/login', data, {
        headers: headers,
    })  
    .then(response => {
        if (response.data.token) {
            Cookies.set('user',response.data.token);
        }  
        })  
        .catch(err => {
            console.log(err)
        })
}

const logout = () => {
    Cookies.remove('user');
}


const register = data => {
    axios.post('https://proyecto-ofertas-ob.herokuapp.com/api/register',data)
}

export const authService = {
    register,
    login,
    logout,
};