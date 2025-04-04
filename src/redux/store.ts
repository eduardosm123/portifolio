import { configureStore } from "@reduxjs/toolkit";
 
import { themeSlice } from "./reducer/themeSlice.ts";
const store = configureStore({
    reducer: {
  
        theme: themeSlice.reducer
    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;