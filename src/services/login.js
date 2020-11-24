import axios from 'axios';

// const baseUrl = 'http://localhost:3002/login';
const baseUrl = 'https://tomodachi-backend.herokuapp.com/login'

const login = async (credentials) => {
  const response = await axios.post(baseUrl, credentials)
  return response.data;
};

export default { login };
