import axios from "axios";

const api = axios.create({
    baseURL: "https://pokeapi.co/api/v2/",
  });


const apiCards = axios.create({
  baseURL: 'https://api.pokemontcg.io/v2/cards/',
  headers:{'x-api-key': process.env.REACT_APP_POKEMON_KEY}
});


export {api,apiCards};