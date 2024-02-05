"use client";

import {
  getCatchPokemon,
  getPokemonDetail,
  setPokemonDetail,
  setPokemonStatus,
} from "@/app/_redux/pokemon-list/pokemonListSlice";
import { useAppDispatch, useAppSelector } from "@/app/_redux/store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DetailPage = ({ params }: { params: { detailName: string } }) => {
  const dispatch = useAppDispatch();
  const pokemonDetail = useAppSelector((state) => state.pokemons.pokemonDetail);
  const pokemonStatus = useAppSelector((state) => state.pokemons.pokemonStatus);
  const router = useRouter();

  useEffect(() => {
    dispatch(getPokemonDetail(params.detailName))
      .unwrap()
      .then((res) => {
        dispatch(setPokemonDetail(res.data));
      });
  }, []);

  const getMovesAndTypes = (param: string) => {
    if (param === "moves") {
      return pokemonDetail?.moves?.map((move, index: number, array) =>
        index + 1 !== array.length
          ? move.move.name + ", "
          : move.move.name + "."
      );
    }

    return pokemonDetail?.types?.map((type, index: number, array) =>
      index + 1 !== array.length ? type.type.name + ", " : type.type.name + "."
    );
  };

  const catchPokemonHandler = (pokemonName: string, pokemonImg: string) => {
    const data = {
      pokemonName: pokemonName,
      pokemonImg: pokemonImg,
    };

    dispatch(getCatchPokemon(data))
      .unwrap()
      .then((res) => {
        dispatch(setPokemonStatus(res.data.status));
      });
  };

  const goToListedPokemonHandler = () => {
    router.push("/listed-pokemon");
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 text-center mt-2">
          <h1>Pokemon Detail</h1>
        </div>
        <div className="col-md-12 d-flex justify-content-center mt-5">
          <div className="card" style={{ width: "30rem" }}>
            <div className="card-body">
              <img
                src={pokemonDetail?.sprites?.back_default}
                className="card-img-top"
              />
              <h2 className="card-title">{pokemonDetail?.name}</h2>
              <ul className="list-unstyled list-inline card-text">
                <li className="list-inline-item">
                  <p>
                    <strong>Moves : </strong>
                  </p>
                </li>
                <li className="list-inline-item">
                  <p>{getMovesAndTypes("moves")}</p>
                </li>
              </ul>
              <ul className="list-unstyled list-inline card-text">
                <li className="list-inline-item">
                  <p>
                    <strong>Types : </strong>
                  </p>
                </li>
                <li className="list-inline-item">
                  <p>{getMovesAndTypes("types")}</p>
                </li>
              </ul>
              <button
                type="button"
                className="btn btn-info d-block mx-auto"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={() =>
                  catchPokemonHandler(
                    pokemonDetail.name,
                    pokemonDetail?.sprites?.back_default
                  )
                }
              >
                Catch {pokemonDetail?.name}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            data-bs-keyboard="false"
            data-bs-backdrop="static"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    {pokemonStatus}!!!
                  </h5>
                  {pokemonStatus === "Uncatched" && (
                    <button
                      type="button"
                      className="close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  )}
                </div>
                <div className="modal-body">{`${pokemonDetail?.name} has been ${pokemonStatus}`}</div>
                <div className="modal-footer">
                  <button
                    onClick={
                      pokemonStatus === "Catched"
                        ? goToListedPokemonHandler
                        : undefined
                    }
                    data-bs-dismiss="modal"
                    type="button"
                    className={`btn ${
                      pokemonStatus === "Uncatched"
                        ? "btn-secondary"
                        : "btn-primary"
                    }`}
                  >
                    {pokemonStatus === "Uncatched"
                      ? "Try Again"
                      : "Go To Listed Pokemon"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
