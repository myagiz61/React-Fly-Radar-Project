import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { options } from "../helpers/constants";

export const getRadar = createAsyncThunk("fly/getFly", async () => {
  const res = await axios.request(options);

  // cevap olarak gelen dizileri objeye çevircez

  const newData = res.data.aircraft.map((flight) => ({
    id: flight[0],
    code: flight[1],
    lat: flight[2],
    lan: flight[3],
  }));
  return newData;
});
