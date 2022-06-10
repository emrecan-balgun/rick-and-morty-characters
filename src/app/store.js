import { configureStore } from '@reduxjs/toolkit';
import rickAndMortySlice from './rickAndMortySlice';

export const store = configureStore({
  reducer: {
    rickAndMorty: rickAndMortySlice,
  },
});