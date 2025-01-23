import { configureStore } from "@reduxjs/toolkit";
import { emailSlice } from "./reducer/EmailSlice.ts";
import { themeSlice } from "./reducer/themeSlice.ts";
const store = configureStore({
    reducer: {
        email: emailSlice.reducer,
        theme: themeSlice.reducer
    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;