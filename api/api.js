import httpClient from './httpClient';

const api = new httpClient();

api._baseURL = 'https://pokeapi.co/api/v2';
api._headers = {
  accept: 'application/json',
};

export default api;
