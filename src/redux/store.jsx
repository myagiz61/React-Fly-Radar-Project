import { configureStore } from "@reduxjs/toolkit";
import radarSlice from "./radarSlice";

export const store = configureStore({ reducer: radarSlice });
