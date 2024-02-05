import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import pokemonListService from "./pokemonListService";
import {
  IPokemonListResponse,
} from "@/app/_interfaces/responses/IPokemonListResponse";

const initialState: IPokemonListResponse = {
  count: 0,
  previous: null,
  results: [],
  next: "",
  pokemonDetail: Object(),
  pokemonStatus: "",
  myPokemons: [],
  errorStatus: "",
  renamePokemon: "",
  originalNamePokemon : "",
  renameCount : 0
};

//Get Pokemon List
export const getPokemonList = createAsyncThunk(
  "pokemonList/get",
  async (payload, thunkAPI) => {
    try {
      return await pokemonListService.getPokemonList();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//Get Pokemon Detail
export const getPokemonDetail = createAsyncThunk(
  "pokemonList/get/detail",
  async (payload: string, thunkAPI) => {
    try {
      return await pokemonListService.getPokemonDetail(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//Post Catch Pokemon
export const getCatchPokemon = createAsyncThunk(
  "pokemon/catch",
  async (data: Object, thunkAPI) => {
    try {
      return await pokemonListService.postCatchPokemon(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//Get Catched Pokemon
export const getPokemonCatched = createAsyncThunk(
  "pokemonCatched/get",
  async (payload, thunkAPI) => {
    try {
      return await pokemonListService.getCatchedPokemon();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//Delete Catch Pokemon
export const deleteCatchedPokemon = createAsyncThunk(
  "pokemonCatched/delete",
  async (data: string, thunkAPI) => {
    try {
      return await pokemonListService.deleteCatchedPokemon(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//Put Rename Pokemon
export const renameCatchPokemon = createAsyncThunk(
  "pokemon/rename",
  async (data: Object, thunkAPI) => {
    try {
      return await pokemonListService.putRenameCatchPokemon(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const pokemonSlice = createSlice({
  name: "pokemon-list",
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.results = action.payload.results;
    },
    setPokemonDetail: (state, action) => {
      state.pokemonDetail = action.payload;
    },
    setPokemonStatus: (state, action) => {
      state.pokemonStatus = action.payload;
    },
    setMyPokemons: (state, action) => {
      state.myPokemons = action.payload;
    },
    setPokemonRelease: (state, action) => {
      state.errorStatus = action.payload;
    },
    setRenamePokemon: (state, action) => {
      state.renamePokemon = action.payload;
    },
    setOriginalPokemon:(state, action) => {
      state.originalNamePokemon = action.payload
    },
    setRenameCount:(state, action) => {
      state.renameCount += action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      //Get All Pokemons
      .addCase(getPokemonList.pending, (state, action) => {})
      .addCase(getPokemonList.fulfilled, (state, action) => {
        state = action.payload.data;
      })
      .addCase(getPokemonList.rejected, (state, action) => {})

      //Get Detail Pokemon
      .addCase(getPokemonDetail.pending, (state, action) => {})
      .addCase(getPokemonDetail.fulfilled, (state, action) => {
        state = action.payload.data;
      })
      .addCase(getPokemonDetail.rejected, (state, action) => {})

      //Get Catch Pokemon
      .addCase(getCatchPokemon.pending, (state, action) => {})
      .addCase(getCatchPokemon.fulfilled, (state, action) => {
        state = action.payload.data;
      })
      .addCase(getCatchPokemon.rejected, (state, action) => {})

      //Get Catched Pokemon
      .addCase(getPokemonCatched.pending, (state, action) => {})
      .addCase(getPokemonCatched.fulfilled, (state, action) => {
        state = action.payload.data;
      })
      .addCase(getPokemonCatched.rejected, (state, action) => {})

      //Delete Catched Pokemon
      .addCase(deleteCatchedPokemon.pending, (state, action) => {})
      .addCase(deleteCatchedPokemon.fulfilled, (state, action) => {
        state = action.payload.data;
      })
      .addCase(deleteCatchedPokemon.rejected, (state, action) => {
        state.errorStatus = action.error.message;
      })

      //Rename Catched Pokemon
      .addCase(renameCatchPokemon.pending, (state, action) => {})
      .addCase(renameCatchPokemon.fulfilled, (state, action) => {
        state = action.payload.data;
      })
      .addCase(renameCatchPokemon.rejected, (state, action) => {
        state.errorStatus = action.error.message;
      });
  },
});

export const {
  setPokemons,
  setPokemonDetail,
  setPokemonStatus,
  setMyPokemons,
  setPokemonRelease,
  setRenamePokemon,
  setOriginalPokemon,
  setRenameCount
} = pokemonSlice.actions;

export default pokemonSlice.reducer;
