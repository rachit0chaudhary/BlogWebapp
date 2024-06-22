import { createSlice } from "@reduxjs/toolkit";

export const testSlice = createSlice({
  name: "test",
  initialState: {
    token: localStorage.getItem("token") || null,
    user: {
      //   _id: "66704116698a59899a18548c",
      //   name: "Rachit",
      //   email: "rav@gmail.com",
      //   password: "$2b$10$XDA38mGZHUMfBki3Wv5G8eB88WrUvBrAP6DkcdpbDrRJKeq0SzWjS",
      //   profille:
      //     "https://cdn.pixabay.com/photo/2017/02/25/22/04/user-icon-2098873_960_720.png",
      //   blogs: [],
      //   role: "user",
      //   __v: 0,
    },
    isLoggedIn: false,
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
      state.isLoggedIn = true;
      console.log("Setting token:", action.payload);
      console.log(" Setting isLoggedIn:", state.isLoggedIn);
    },
    setUser(state, action) {
      console.log("Setting user:", action.payload);
      state.user = action.payload;
      console.log(" user:", state.user);
    },
    // clearToken(state) {
    //   state.token = null;
    //   state.isLoggedIn = false;
    //   state.user = null;
    //   localStorage.removeItem("token");
    // },
  },
});

export const { setToken, clearToken, setUser } = testSlice.actions;
export default testSlice.reducer;
