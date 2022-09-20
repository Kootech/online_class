import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { lessionApiRequest } from "../../services/api";

const initialState = {
  lessions: [],
  message: "",
};

export const getLessions = createAsyncThunk(
  "lessions/getAll",
  async (_, ThunkAPI) => {
    try {
      // console.log("thunk was called");
      const lessions = await lessionApiRequest();
      // console.log("thunk done");

      return lessions;
    } catch (error) {
      return ThunkAPI.rejectWithValue();
    }
  }
);

const lessionSlice = createSlice({
  name: "lession",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLessions.fulfilled, (state, action) => {
      state.lessions = action.payload;
    });
  },
});

export default lessionSlice.reducer;
