import axios from "axios";

export const pokemonApi = {
  getPokemon() {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/`).then((response) => {
      return response.data;
    });
  },
  getPokemonApi(url){
    return axios.get(url).then((response) => {
      return response.data
    });
  },
  nextApi(next) {
    return axios.get(next).then((response) => {
      return response.data;
    });
  },
  prevApi(previous) {
    return axios.get(previous).then((response) => {
      return response.data;
    });
  },
  urlCardItemsApi(url){
    return axios.get(url).then((response) => {
      console.log(response.data)
      return response.data;
    });
  }
};