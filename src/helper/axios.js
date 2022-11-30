import axios from "axios";

export const getData = async (state, url) => {
    const peticion = await axios.get(url);
    state(peticion.data);
};