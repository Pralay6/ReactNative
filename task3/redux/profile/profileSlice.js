import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  mobile: "",
  email: "",
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    setMobile: (state, action) => {
      state.mobile = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export default profileSlice.reducer;
export const { setFirstName, setLastName, setEmail, setMobile } =
  profileSlice.actions;
