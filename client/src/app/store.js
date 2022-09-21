import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import lessionReducer from "../features/lessions/lessionSlice";
import authReducer from "../features/auth/authSlice";

const store = configureStore({
  reducer: {
    lessions: lessionReducer,
    user: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
