import axios from 'axios';

const URL = "https://ob-proyecto-equipo1.herokuapp.com/api/ofertas";

// Obtain all Offers
export const getAllOffers = () => {
    return axios.get(URL);
} 

// Obtain Offer by ID
export const getOfferByID = (id) => {
    return axios.get(`${URL}/${id}`);
} 


