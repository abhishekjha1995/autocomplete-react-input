import axios from 'axios';

axios.defaults.baseURL = "https://rickandmortyapi.com/api"; // url where webservices are deployed

export const getData = async (apiEndpoint, params = {}, optionalConfig = {}) => {
    try {
        return await axios.get(apiEndpoint, {
            params,
            ...optionalConfig
        });
    } catch (error) {
        return { error };
    }
}