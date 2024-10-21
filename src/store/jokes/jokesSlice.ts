import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {JokeType} from 'models/IJoke';
import {getJoke} from './jokesThunks';

interface JokesState {
  currentJoke: JokeType | null;
  jokes: JokeType[];
  isLoading: boolean;
  error: string | null;
}

const initialState: JokesState = {
  currentJoke: null,
  jokes: [],
  isLoading: false,
  error: null,
};

export const jokesSlice = createSlice({
  name: 'jokes',
  initialState,
  reducers: {
    toggleLikeJoke(state, action: PayloadAction<number>) {
      if(state.currentJoke && state.currentJoke.id === action.payload) {
        state.currentJoke.isLiked = !state.currentJoke?.isLiked
      }
      let foundedJokeIndex = state.jokes.findIndex(j => j.id === action.payload)
      if(foundedJokeIndex === -1) return
      state.jokes[foundedJokeIndex].isLiked = !state.jokes[foundedJokeIndex].isLiked
    }
  },
  extraReducers: builder => {
    builder
      .addCase(
        getJoke.fulfilled.type,
        (state, action: PayloadAction<JokeType[]>) => {
          state.currentJoke = action.payload[0];
          state.jokes = action.payload
          state.isLoading = false;
          state.error = null
        },
      )
      .addCase(getJoke.pending.type, state => {
        state.isLoading = true;
      })
      .addCase(getJoke.rejected.type, (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = action.payload
      });
  },
});

export const {toggleLikeJoke} = jokesSlice.actions

export const jokesReducer = jokesSlice.reducer;
