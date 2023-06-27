import axios from "axios";

const url = 'http://localhost:8000';

export const authenticateLogin = async (user) => {
    try {
        
        return await axios.post(`${url}/signup`, user);
    } catch (error) {
       if(error.response){
        console.log('Error while calling login API: ', error);
       }
    }
}