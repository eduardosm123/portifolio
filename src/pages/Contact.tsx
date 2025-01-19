
import { Box } from '@mui/material';
import NavBar from '../components/NavBar.tsx';
import * as React from 'react';
import Presentation from "../components/Presentation.tsx";
import ContactForm from '../components/ContactForm.tsx';



export default function Contact() {

 

    return (
        <>
            <NavBar>
                <div>
                    <Box sx={{ display: 'flex', flexDirection: 'column', paddingBottom: 1 }}>
                        <Presentation text="Meus Contatos" />
                    </Box>
                    <Box className='bg-[#f8fafc] hover:bg-[#f1f5f9] m-4 px-4 py-3 rounded-lg' >
                        <article>
                            <p style={{ fontSize: "120%" }}>
                                <span  className='font-bold'>Email: </span>magalhaeseduardo91@gmail.com
                            </p>
                        </article>
                    </Box>

                    <Box className='bg-[#f8fafc] hover:bg-[#f1f5f9] m-4 px-4 py-3 rounded-lg' >
                        <article>

                            <p style={{ fontSize: "120%" }}>
                                <span  className='font-bold'>Telefone / Whatsapp: </span> (45) 99838-1516
                            </p>

                        </article>
                    </Box>
                    <Box className='bg-[#f8fafc] hover:bg-[#f1f5f9] m-4 px-4 py-3 rounded-lg' >
                        <article>
                            <p style={{ fontSize: "120%" }}>
                                <span className='font-bold'  >Linkedin:</span>  <a  target='_blank'  className='text-blue-600 hover:text-red-600' rel="noopener noreferrer" href='https://www.linkedin.com/notifications/?filter=all'> Eduardo magalhães </a>
                            </p>
                        </article>
                    </Box>
                     <ContactForm />
                </div>
            </NavBar>
        </>
    )
}