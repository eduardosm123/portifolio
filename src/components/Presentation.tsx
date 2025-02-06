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

                {link ? <>
                    <h1 className='  font-bold text-lg mt-6 text-justify' style={{ color: darkMode ? "white" : "black" }} >{text}  <p  >
                        <span className={!darkMode ? ' font-bold text-lg mt-6 text-black' : 'text-center font-bold text-lg mt-6 text-white'} >Linkedin:</span>  <a target='_blank' className='text-blue-600 hover:text-red-600' rel="noopener noreferrer" href='https://www.linkedin.com/in/eduardo-magalh%C3%A3es-39161a20a/'> Eduardo magalhães </a>
                    </p></h1>
                </> : <> <h1 className='text-center font-bold text-lg mt-6  ' style={{ color: darkMode ? "white" : "black" }} >{text} </h1></>}
            </Container>
        </>

    )
}