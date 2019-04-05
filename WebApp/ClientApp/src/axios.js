import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://nickelsanddimes.azurewebsites.net'
    //baseURL:'http://localhost:55763/'
});

export default instance;
