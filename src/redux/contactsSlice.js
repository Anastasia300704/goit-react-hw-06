import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: (state, action) => {
      state.push(action.payload); // Тут додаємо контакт в масив
    },
    deleteContact: (state, action) => {
      return state.filter(contact => contact.id !== action.payload); // Видаляємо контакт
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const selectContacts = state => state.contacts;
export const contactsReducer = contactsSlice.reducer;