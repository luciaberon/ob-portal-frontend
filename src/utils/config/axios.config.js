import axios from "axios";

const URL = "https://ob-proyecto-equipo1.herokuapp.com/api";


export default axios.create({
  baseURL: URL,
  headers: {
    "Content-type": "application/json"
  }
});