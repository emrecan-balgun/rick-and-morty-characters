import { createSlice } from '@reduxjs/toolkit'

export const rickAndMortySlice = createSlice({
  name: 'rickAndMorty',
  initialState:  {
      pageNumber: 1,
      perPage: 8,
  },
  reducers: {
    changePageNumber(state, action) {
        state.pageNumber = action.payload
    },
    changePerPage(state, action) {
        state.perPage = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changePageNumber, changePerPage } = rickAndMortySlice.actions;

export const pageNumber = (state) => state.rickAndMorty.pageNumber;
export const perPage = (state) => state.rickAndMorty.perPage;

export default rickAndMortySlice.reducer;