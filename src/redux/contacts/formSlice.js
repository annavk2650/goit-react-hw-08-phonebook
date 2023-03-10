import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

const initState = {
  contacts: {
    items: [],
    isLoading: true,
    error: null,
  },
  filter: '',
};

const formSlice = createSlice({
  name: 'contacts',
  initialState: initState.contacts,
  reducers: {},

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(contact => contact.id === action.payload.id);
        state.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const filterSlice = createSlice({
  name: 'filter',
  initialState: initState.filter,

  reducers: {
    FILTER: (_, { payload }) => payload,
  },
});

export const { FILTER } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

export const formReducer = formSlice.reducer;
