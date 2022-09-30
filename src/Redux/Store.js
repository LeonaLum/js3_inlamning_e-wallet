import { configureStore } from "@reduxjs/toolkit";
import cardListSlice from "./cardListSlice";
import userSlice from "./userSlice";
import demoCardSlice from "./demoCardSlice";

const store = configureStore({
  reducer:{
    cardList: cardListSlice,
    user: userSlice,
    demoCard: demoCardSlice
  },
});
export default store;