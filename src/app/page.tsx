"use client";

import { useEffect } from "react";
import "./globals.css";
import { useAppDispatch, useAppSelector } from "./_redux/store";
import {
  getPokemonList,
  setPokemons,
} from "./_redux/pokemon-list/pokemonListSlice";
import { useRouter } from "next/navigation";

export default function Home() {
  const dispatch = useAppDispatch();
  const getPokemons = useAppSelector((state) => state.pokemons.results);
  const router = useRouter();

  useEffect(() => {
    dispatch(getPokemonList())
      .unwrap()
      .then((res: any) => {
        dispatch(setPokemons(res.data));
      });
  }, []);

  return (
    <div className="container px-4">
      <div className="row g-3">
        <div className="col-md-12 text-center my-3">
          <h1>Pokemon List</h1>
        </div>
        {getPokemons?.map((pokemon, pokemonId) => (
          <div
            key={pokemonId}
            className="col-md-3 pb-3"
            role="button"
            onClick={() => router.push(`detail/${pokemon.name}`)}
          >
            <div className="col-md-12 border bg-light rounded">
              <div className="row ">
                <div className="col-md-12 ">
                  <img
                    src={pokemon.img}
                    width={150}
                    height={150}
                    className="d-block mx-auto"
                  />
                </div>
                <div className="col-md-12 text-center">
                  <p className="p-3">{pokemon.name}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
