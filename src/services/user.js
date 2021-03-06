import axios from 'axios';

// const baseUrl = 'http://localhost:3002/users';
const baseUrl ='https://tomodachi-backend-db.herokuapp.com/users';

const register = async (credentials) => {
  const response = await axios.post(baseUrl, credentials);
  return response.data;
};

const createPet = async (id, petData) => {
  const response = await axios.patch(`${baseUrl}/${id}`, petData);
  return response.data;
};

const updatePet = async (id, petData) => {
  const response = await axios.patch(`${baseUrl}/update/${id}`, petData);
  return response.data;
}

const retrieveInfo = async(id) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  return response.data;
}

const visitInfo = async(username) => {
  const response = await axios.get(`${baseUrl}/visit/${username}`);
  return response.data;
}

export default { register, createPet, updatePet, retrieveInfo, visitInfo };
