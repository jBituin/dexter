import api from './api';
import queryBuilder from '../utils/queryBuilder';
export default {
  getPokemon: (page) => {
    const query = queryBuilder(page)
    return api.get(`/pokemon?${query}`);
  },

  getPokemonDetails: (id) => {
    return api.get(`/pokemon/${id}`);
  },

  getAbilityDetails: (id) => {
    return api.get(`/ability/${id}`);
  },

  getTypeDetails: (id) => {
    return api.get(`/type/${id}`);
  },
};
