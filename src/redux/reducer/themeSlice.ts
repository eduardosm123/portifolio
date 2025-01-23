import { createSlice } from "@reduxjs/toolkit";




const initialState = {
    darkMode: true
}


export const themeSlice = createSlice({
    name: 'email',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.darkMode = !state.darkMode;
          },
    }
})

export const { toggleTheme } = themeSlice.actions;


