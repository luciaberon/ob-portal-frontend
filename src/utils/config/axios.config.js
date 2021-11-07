import axios from "axios";
import Cookies from "js-cookie";


// axios config for api requests

const URL = "https://proyecto-ofertas-ob.herokuapp.com/api";

export default axios.create({
  baseURL: URL,
  headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('user'),
      'accept': '*/*'
   },
});