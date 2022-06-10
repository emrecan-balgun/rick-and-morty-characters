import { createSlice } from '@reduxjs/toolkit'

export const rickAndMortySlice = createSlice({
  name: 'rickAndMorty',
  initialState:  {
      pageNumber: 1
  },
  reducers: {
    changePageNumber(state, action) {
        state.pageNumber = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changePageNumber } = rickAndMortySlice.actions;

export const pageNumber = (state) => state.rickAndMorty.pageNumber;

export default rickAndMortySlice.reducer;