import { configureStore } from "@reduxjs/toolkit";

import lessionReducer from "../features/lessions/lessionSlice";
import authReducer from "../features/auth/authSlice";

const store = configureStore({
  reducer: {
    lessions: lessionReducer,
    user: authReducer,
  },
});

export default store;
