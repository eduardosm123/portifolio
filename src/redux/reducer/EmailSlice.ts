import { createSlice } from "@reduxjs/toolkit";

interface EmailI {
    data: {
        name: string,
        email: string,
        message: string
    }
}


const initialState: EmailI = {
    data: {
        name: '',
        email: '',
        message: ''
    }
}

export const emailSlice = createSlice({
    name: 'email',
    initialState,
    reducers: {
        setData: (state, { payload }) => {
            state.data = { ...state.data, ...payload }
        },
        clearData: (state) => {
            state.data.email = ''
            state.data.name = ''
            state.data.message = ''
        }
    }
})

export const { setData, clearData } = emailSlice.actions;
