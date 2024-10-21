import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {API_BASE_URL} from 'constants/index.ts';
import {IJokeResponse, JokeType} from 'models/IJoke';
import {formatDate} from 'utils';
import {getAsyncStorageData, saveAsyncStorageData} from 'utils/storage';

export const getJoke = createAsyncThunk('jokes/joke', async (_, thunkAPI) => {
  try {
    const response = await axios.get<IJokeResponse>(`${API_BASE_URL}/joke/Any`);
    const {error, setup, delivery, ...joke} = response.data; // remove error, setup and delivery becase we dont use it in
    joke.joke = joke.joke ?? `${setup} ${delivery}`; // different response. Universal field -> .joke
    let todayDate = formatDate(new Date());
    let currentJoke: JokeType = {
      ...joke,
      date: todayDate,
      isLiked: false,
    };
    let localJokes = await getAsyncStorageData<JokeType[]>('@jokes');
    const foundedJoke = localJokes
      ? localJokes.find(j => j.date === todayDate)
      : null; // check if already exist joke with today date
    if (foundedJoke) return localJokes;
    
    let returnJokes: JokeType[] = [currentJoke];
    if (localJokes && localJokes.find(j => j.id !== joke.id)) { // if there are saved jokes -> add new joke in start
      returnJokes = [...returnJokes, ...localJokes];
    }
    return returnJokes;
  } catch (e) {
    console.log(e);
    return thunkAPI.rejectWithValue('Failed to load a joke');
  }
});
