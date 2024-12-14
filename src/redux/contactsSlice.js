import { createSlice } from '@reduxjs/toolkit';

// Початковий стан (наприклад, масив контактів)
const initialState = [];

// Створення slice для контактів
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.push(action.payload);
    },
    removeContact: (state, action) => {
      return state.filter(contact => contact.id !== action.payload);
    },
    deleteContact: (state, action) => {
      return state.filter(contact => contact.id !== action.payload);
    }
  }
});

// Селектор для отримання всіх контактів
export const selectContacts = (state) => state.contacts;  // Вибираємо контакти з глобального стану

// Експортуємо дії та редюсер
export const { addContact, removeContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;