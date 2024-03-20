import { configureStore } from "@reduxjs/toolkit";
import FilmReducer from "./reducer/getfilm.reducer";

const store = configureStore({ reducer: {FilmReducer} });

export default store;
