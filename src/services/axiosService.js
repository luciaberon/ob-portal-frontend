import http from '../utils/config/axios.config';

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