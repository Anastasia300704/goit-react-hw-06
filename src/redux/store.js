import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";

// Конфігурація для persist
const persistConfig = {
  key: "contacts",
  storage,
  whitelist: ["items"], // Зберігаємо тільки поле items
};

// Об'єднання редюсерів
const rootReducer = combineReducers({
  contacts: persistReducer(persistConfig, contactsReducer),
  filters: filtersReducer,
});

// Створення store
const store = configureStore({
  reducer: rootReducer,
});

export const persistor = persistStore(store);
export default store;
