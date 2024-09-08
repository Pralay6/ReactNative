import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: true,
  users: [],
  error: "",
};

//Generates pending, fulfilled, and rejected action types.
export const fetchUsers = createAsyncThunk("home/fetchUsers", async () => {
  const response = await axios.get(
    "https://randomuser.me/api/?results=100&inc=name"
  );
  return response.data.results;
});

const homeSlice = createSlice({
  name: "home",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      (state.loading = true),
        (state.users = action.payload),
        (state.error = "");
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      (state.loading = false),
        (state.users = []),
        (state.error = action.error.message);
    });
  },
});

export default homeSlice.reducer;
