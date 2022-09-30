import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUser = createAsyncThunk("userList/getUsers", async() => {
  return fetch ("https://randomuser.me/api/")
  .then((res) => res.json()
  );
});

const userSlice = createSlice({
  name: "cardList",
  initialState: {
   user: null
  },
  extraReducers: {
    [getUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.status = "Found data";
    },
    [getUser.pending]: (state, action) => {
      state.status = "Loading data";
    },
    [getUser.rejected]: (state, action) => {
      state.status = "Failed to get data";
    },
  }
})
export default userSlice.reducer;