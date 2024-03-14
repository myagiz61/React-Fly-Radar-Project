import { createSlice } from "@reduxjs/toolkit";
import { getRadar } from "./action";
const initialState = {
  flights: [],
  isLoading: true,
  isError: false,
};

const radarSlice = createSlice({
  name: "radar",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getRadar.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getRadar.fulfilled, (state, action) => {
      state.isError = false;
      state.isLoading = false;
      state.flights = action.payload;
    });
    builder.addCase(getRadar.rejected, (state) => {
      (state.isLoading = false),
        (state.isError = "Uçus Verilerini Alırken Hata Oluştu");
    });
  },
});

export default radarSlice.reducer;
