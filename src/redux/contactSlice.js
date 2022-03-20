import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    addContact: (state, action) => {
      state.items.push({
        id: nanoid(4),
        name: action.payload.name,
        number: action.payload.number,
      });
    },
    removeContact: (state, action) => {
      state.items = state.items.filter(
        contact => contact.id !== action.payload.id
      );
    },
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, removeContact, changeFilter } = contactSlice.actions;
export default contactSlice.reducer;
