import axios from 'axios';

const baseUrl = 'http://localhost:3002/users';

const register = async (credentials) => {
  const response = await axios.post(baseUrl, credentials);
  return response.data;
};

export default { register };
