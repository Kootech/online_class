import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { loginApiRequest } from "../../services/api";

const initialState = {
  user: [],
  message: "",
};

export const userLogin = createAsyncThunk(
  "loginUser/",
  async (data, ThunkAPI) => {
    try {
      const data = await loginApiRequest(data);
      return data;
    } catch (error) {
      return ThunkAPI.rejectWithValue();
    }
  }
);

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export default authSlice.reducer;
