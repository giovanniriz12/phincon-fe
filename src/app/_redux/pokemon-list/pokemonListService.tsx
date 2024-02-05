import { IPokemonListResponse } from "@/app/_interfaces/responses/IPokemonListResponse";
import axios from "axios";

const API_BASE_URL = "http://localhost:3001/api/v1";

// Get Pokemon List
const getPokemonList = async () => {
  const res = await axios.get<IPokemonListResponse>(
    `${API_BASE_URL}/phincon/pokemons`
  );
  return res;
};

// Get Pokemon Detail
const getPokemonDetail = async (params: string) => {
  const res = await axios.get(`${API_BASE_URL}/phincon/pokemon/${params}`);
  return res;
};

// Post Catch Pokemon
const postCatchPokemon = async (data: any) => {
  const res = await axios.post(`${API_BASE_URL}/phincon/pokemon/catch`, data);
  return res;
};

// Get Catched Pokemon
const getCatchedPokemon = async () => {
  const res = await axios.get(`${API_BASE_URL}/phincon/pokemon/catched`);
  return res;
};

// Delete Catched Pokemon
const deleteCatchedPokemon = async (data: any) => {
  const res = await axios.delete(
    `${API_BASE_URL}/phincon/pokemon/catched/${data}`
  );
  return res;
};

// Put Rename Pokemon
const putRenameCatchPokemon = async (data: any) => {
  const res = await axios.put(`${API_BASE_URL}/phincon/pokemon/rename`, data);
  return res;
};

const pokemonListService = {
  getPokemonList,
  getPokemonDetail,
  postCatchPokemon,
  getCatchedPokemon,
  deleteCatchedPokemon,
  putRenameCatchPokemon
};

export default pokemonListService;
