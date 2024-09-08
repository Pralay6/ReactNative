import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./profile/profileSlice";
import homeReducer from "./home/homeSlice";

const store = configureStore({
  reducer: {
    profile: profileReducer,
    home: homeReducer,
  },
});

export default store;
