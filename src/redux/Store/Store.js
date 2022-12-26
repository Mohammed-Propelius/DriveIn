import { configureStore } from "@reduxjs/toolkit";
import userDataSlice from "../Slice/userDataSlice";
const store = configureStore({
  reducer: {
    userDataInfo: userDataSlice.reducer,
  },
});

export default store;
