import * as React from 'react';

import { Container } from "@mui/material";

import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

interface presentationPropsI {
    text: string,
    link?: boolean
}

export default function Presentation({ text, link }: presentationPropsI) {
    const darkMode = useSelector((state: RootState) => state.theme.darkMode);

    return (
        <>
            <div className="pb-[1%]"></div>
            <Container className='flex flex-col pb-5'>
                <img src='/minhaFoto.png' alt='Minha Foto' className='w-[25%] h-[25%] self-center rounded-[50%] shadow-xl'></img>
                <h1 className='text-center font-bold text-lg mt-6  ' style={{ color: darkMode ? "white" : "black" }} >{text} </h1>
            </Container>
        </>

    )
}