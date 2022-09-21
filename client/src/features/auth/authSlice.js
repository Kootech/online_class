import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { loginApiRequest } from "../../services/api";

const user = JSON.parse(localStorage.getItem("lession-app-user"));

const initialState = {
  user: user ? user : null,
  message: "",
};

export const userLogin = createAsyncThunk(
  "loginUser/",
  async (data, ThunkAPI) => {
    console.log(data);
    try {
      const res = await loginApiRequest(data);
      console.log("async thunk done");

      return res;
    } catch (error) {
      return ThunkAPI.rejectWithValue(error);
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
