
import { Box } from '@mui/material';
import NavBar from '../components/NavBar.tsx';
import * as React from 'react';
import Presentation from "../components/Presentation.tsx";

import '../css/Contact.css'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

export default function Contact() {


    const darkMode = useSelector((state: RootState) => state.theme.darkMode);
    return (
        <>
            <NavBar>
                <div data-testid="contact" className="min-h-screen flex flex-col">
                    <Box className='flex flex-col pb-1'> <Presentation text="Formas de entrar em contato: " /> </Box>
                    <Box className={darkMode ? "m-4 px-4 py-3 rounded-lg" : " m-4 px-4 py-3 rounded-lg"} 
                    sx={{
                        backgroundImage: !darkMode ? 
                        `url(${process.env.PUBLIC_URL}/fundo-escuro.jpg)` :
                        `url(${process.env.PUBLIC_URL}/fundo-branco.jpg)`
                    }}>
                        <article>
                            <p  className={darkMode ? ' text-black font_size_contact':'  text-white font_size_contact'} >
                                <span  className="font-bold">Email: </span>magalhaeseduardo91@gmail.com
                            </p>
                        </article>
                    </Box>
                    <Box className={darkMode ? "m-4 px-4 py-3 rounded-lg" : " m-4 px-4 py-3 rounded-lg"}
                        sx={{
                            backgroundImage: !darkMode ? 
                            `url(${process.env.PUBLIC_URL}/fundo-escuro.jpg)` :
                            `url(${process.env.PUBLIC_URL}/fundo-branco.jpg)`
                        }}>
                        <article>
                            <p className='font_size_contact'>
                                <span className={darkMode ? 'font-bold text-black':'font-bold text-white'}>Telefone / Whatsapp: </span>   <a className='text-blue-600 hover:text-red-600' href="https://wa.me/5545998381516" target="_blank" rel="noopener noreferrer">
                                    (45) 99838-1516
                                </a>
                            </p>
                        </article>
                    </Box>
                    <Box className={darkMode ? "m-4 px-4 py-3 rounded-lg" : " m-4 px-4 py-3 rounded-lg"}
                        sx={{
                            backgroundImage: !darkMode ? 
                            `url(${process.env.PUBLIC_URL}/fundo-escuro.jpg)` :
                            `url(${process.env.PUBLIC_URL}/fundo-branco.jpg)`
                        }}>
                        <article>
                            <p className='font_size_contact'>
                                <span  className={darkMode ? 'font-bold text-black':'font-bold text-white'} >Linkedin:</span>  <a target='_blank' className='text-blue-600 hover:text-red-600' rel="noopener noreferrer" href='https://www.linkedin.com/in/eduardo-magalh%C3%A3es-39161a20a/'> Eduardo magalhães </a>
                            </p>
                        </article>
                    </Box>
                    <div className="flex-grow"></div>
                </div>
            </NavBar>
        </>
    )
}