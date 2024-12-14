import { createSlice } from '@reduxjs/toolkit';

// Початковий стан фільтра
const initialState = {
  nameFilter: '',
};

// Створення slice для фільтрів
const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.nameFilter = action.payload;
    },
  }
});

// Селектор для отримання значення фільтра
export const selectFilter = (state) => state.filters.nameFilter; // Вибираємо фільтр з глобального стану

// Експортуємо дію та редюсер
export const { changeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;