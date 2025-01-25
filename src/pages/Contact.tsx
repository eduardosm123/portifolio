
import { Box } from '@mui/material';
import NavBar from '../components/NavBar.tsx';
import * as React from 'react';
import Presentation from "../components/Presentation.tsx";
import ContactForm from '../components/ContactForm.tsx';
import '../css/Contact.css'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

export default function Contact() {


    const darkMode = useSelector((state: RootState) => state.theme.darkMode);
    return (
        <>
            <NavBar>
                <div>
                    <Box className='flex flex-col pb-1'> <Presentation text="Veja mais sobre minha Jornada como Desenvolvedor Front-end" /> </Box>
                    <Box className={darkMode ? "bg-[#f8fafc] hover:bg-[#f1f5f9] m-4 px-4 py-3 rounded-lg" : "bg-[#d1d5db] hover:bg-[#e5e7eb] m-4 px-4 py-3 rounded-lg"} >
                        <article>
                            <p className='font_size_contact'>
                                <span className='font-bold'>Email: </span>magalhaeseduardo91@gmail.com
                            </p>
                        </article>
                    </Box>

                    <Box className={darkMode ? "bg-[#f8fafc] hover:bg-[#f1f5f9] m-4 px-4 py-3 rounded-lg" : "bg-[#d1d5db] hover:bg-[#e5e7eb] m-4 px-4 py-3 rounded-lg"} >
                        <article>

                            <p className='font_size_contact'>
                                <span className='font-bold'>Telefone / Whatsapp: </span>   <a className='text-blue-600 hover:text-red-600' href="https://wa.me/5545998381516" target="_blank" rel="noopener noreferrer">
                                    (45) 99838-1516
                                </a>
                            </p>



                        </article>
                    </Box>
                    <Box className={darkMode ? "bg-[#f8fafc] hover:bg-[#f1f5f9] m-4 px-4 py-3 rounded-lg" : "bg-[#d1d5db] hover:bg-[#e5e7eb] m-4 px-4 py-3 rounded-lg"}>
                        <article>
                            <p className='font_size_contact'>
                                <span className='font-bold'  >Linkedin:</span>  <a target='_blank' className='text-blue-600 hover:text-red-600' rel="noopener noreferrer" href='https://www.linkedin.com/in/eduardo-magalh%C3%A3es-39161a20a/'> Eduardo magalhães </a>
                            </p>
                        </article>
                    </Box>
                    <div className='flex justify-center items-center w-full'> <ContactForm /></div>
                    
                </div>
            </NavBar>
        </>
    )
}