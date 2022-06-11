import { createSlice } from '@reduxjs/toolkit'

export const rickAndMortySlice = createSlice({
  name: 'rickAndMorty',
  initialState:  {
      pageNumber: 1,
      perPage: 8,
      checked: false,
      searchValue: '',
      genderValue: [],
      speciesValue: [],
      locationValue: [],
  },
  reducers: {
    changePageNumber(state, action) {
        state.pageNumber = action.payload
    },
    changePerPage(state, action) {
        state.perPage = action.payload
    },
    changeChecked(state, action) {
        state.checked = action.payload
    },
    changeSearchValue(state, action) {
        state.searchValue = action.payload
    },
    addGenderValue(state, action) {
        state.genderValue.push(action.payload);
    },
    removeGenderValue(state, action) {
        state.genderValue.splice(state.genderValue.indexOf(action.payload), 1);
    },
    addSpeciesValue(state, action) {
        state.speciesValue.push(action.payload);
    },
    removeSpeciesValue(state, action) {
        state.speciesValue.splice(state.speciesValue.indexOf(action.payload), 1);
    },
    addLocationValue(state, action) {
        state.locationValue.push(action.payload);
    },
    removeLocationValue(state, action) {
        state.locationValue.splice(state.locationValue.indexOf(action.payload), 1);
    },
}})

// Action creators are generated for each case reducer function
export const { changePageNumber, changePerPage, changeChecked, changeSearchValue, addGenderValue, removeGenderValue, addSpeciesValue, removeSpeciesValue, addLocationValue, removeLocationValue } = rickAndMortySlice.actions;

export const pageNumber = (state) => state.rickAndMorty.pageNumber;
export const perPage = (state) => state.rickAndMorty.perPage;
export const checked = (state) => state.rickAndMorty.checked;
export const searchValue = (state) => state.rickAndMorty.searchValue;
export const genderValue = (state) => state.rickAndMorty.genderValue;
export const speciesValue = (state) => state.rickAndMorty.speciesValue;
export const locationValue = (state) => state.rickAndMorty.locationValue;

export default rickAndMortySlice.reducer;