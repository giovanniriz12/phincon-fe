import {
  deleteCatchedPokemon,
  renameCatchPokemon,
  setMyPokemons,
  setRenameCount,
  setRenamePokemon,
} from "@/app/_redux/pokemon-list/pokemonListSlice";
import { useAppDispatch, useAppSelector } from "@/app/_redux/store";
import { FC } from "react";

const ModalRename: FC = (props) => {
  const pokemonToBeRenamed = useAppSelector(
    (state) => state.pokemons.renamePokemon
  );

  const originalNamePokemon = useAppSelector(
    (state) => state.pokemons.originalNamePokemon
  );

  const renameCount = useAppSelector((state) => state.pokemons.renameCount);
  const dispatch = useAppDispatch();

  const onRenamePokemon = () => {
    dispatch(setRenameCount(1));
    const data = {
      original_name: originalNamePokemon,
      pokemon_rename: pokemonToBeRenamed,
      rename_count: renameCount,
    };

    dispatch(renameCatchPokemon(data))
      .unwrap()
      .then((res) => {
        dispatch(setMyPokemons(res.data));

      })
      .catch((err) => {});
  };

  return (
    <div
      className="modal fade"
      id="renameModal"
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
              Information
            </h5>
            <button
              type="button"
              className="close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>Rename Pokemon</p>
            <input
              type="text"
              onChange={(e) => dispatch(setRenamePokemon(e.target.value))}
              value={pokemonToBeRenamed}
            />
          </div>
          <div className="modal-footer">
            <button
              data-bs-dismiss="modal"
              type="button"
              className="btn btn-danger"
            >
              Cancel
            </button>
            <button
              data-bs-dismiss="modal"
              type="button"
              className="btn btn-primary"
              onClick={() => onRenamePokemon()}
              disabled={originalNamePokemon === pokemonToBeRenamed ? true : false}
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalRename;
