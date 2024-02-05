"use client";

import { Fragment, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../_redux/store";
import { useRouter } from "next/navigation";
import {
  deleteCatchedPokemon,
  getPokemonCatched,
  setMyPokemons,
  setOriginalPokemon,
  setPokemonRelease,
  setRenamePokemon,
} from "../_redux/pokemon-list/pokemonListSlice";
import ModalRelease from "@/components/modal/ModalRelease";
import ModalRename from "@/components/modal/ModalRename";

const ListedPokemonPage = () => {
  const dispatch = useAppDispatch();
  const getMyPokemons = useAppSelector((state) => state.pokemons.myPokemons);
  const router = useRouter();

  useEffect(() => {
    dispatch(getPokemonCatched())
      .unwrap()
      .then((res) => {
        dispatch(setMyPokemons(res.data));
      });
  }, []);

  const releasePokemonHandler = (pokemonName: string) => {
    dispatch(deleteCatchedPokemon(pokemonName))
      .unwrap()
      .then((res) => {
        if (res.status === 200) {
          dispatch(setPokemonRelease(`${pokemonName} has been released`));
          dispatch(setMyPokemons(res.data));
        }
      })
      .catch((err) => {
        if (err.response.status === 400) {
          dispatch(setPokemonRelease(`${pokemonName} failed to release`));
        }
      });
  };

  const renamePokemonHandler = (pokemonName: string) => {
    dispatch(setOriginalPokemon(pokemonName))
    dispatch(setRenamePokemon(pokemonName));
  };

  return (
    <Fragment>
      <div className="container px-4">
        <div className="row g-3 pt-4">
          <div className="col-md-12 text-center my-3">
            <h1>My Pokemons</h1>
          </div>
          <div className="col-md-12 text-center my-3">
            <button
              onClick={() => router.push("/")}
              type="button"
              className="btn btn-info text-white"
            >
              Back to pokemon list
            </button>
          </div>
          {getMyPokemons?.map((pokemon, pokemonId) => (
            <div key={pokemonId} className="col-md-3 pb-3">
              <div className="col-md-12 border bg-light mb-3 rounded">
                <div className="row ">
                  <div className="col-md-12 ">
                    <img
                      src={pokemon.pokemonImg}
                      width={150}
                      height={150}
                      className="d-block mx-auto"
                    />
                  </div>
                  <div className="col-md-12 text-center">
                    <p className="p-3">{pokemon.pokemonName}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 d-flex justify-content-center mb-3">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#renameModal"
                  onClick={() => renamePokemonHandler(pokemon.pokemonName)}
                >
                  Rename Pokemon
                </button>
              </div>
              <div className="col-md-12 d-flex justify-content-center">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-toggle="modal"
                  data-bs-target="#releaseModal"
                  onClick={() => releasePokemonHandler(pokemon.pokemonName)}
                >
                  Release Pokemon
                </button>
              </div>
            </div>
          ))}
          {getMyPokemons.length === 0 && (
            <h1 className="text-center mt-5">You don't have pokemon</h1>
          )}
        </div>
      </div>
      <ModalRelease />
      <ModalRename />
    </Fragment>
  );
};

export default ListedPokemonPage;
