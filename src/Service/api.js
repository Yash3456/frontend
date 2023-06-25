import axios from 'axios';

const url = 'http://localhost:8000';

export const authenticateLogin = async (user) => {
    try {
        console.log(user);
        return await axios.post(`${url}/signup`, user)
    } catch (error) {
        console.log('Error while calling login API: ', error);
    }
}