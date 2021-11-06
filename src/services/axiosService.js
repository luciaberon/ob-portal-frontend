import http from '../utils/config/axios.config';
import axios from 'axios'

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

// Auth service
export class AuthService {
    login(data) {
        axios.post('https://proyecto-ofertas-ob.herokuapp.com/api/login', data, {
            headers: headers,
        })  
        .then(response => {
            if (response.data.token) {
                localStorage.setItem("user", response.data.token);
            }  
            return response.status;
        })  
        .catch(err => {
            console.log("FAILED FETCH")
        })
    }
    logout() {
        localStorage.removeItem("user");
    }
    register(data) {
        axios.post('https://proyecto-ofertas-ob.herokuapp.com/api/register',data)
    }
}