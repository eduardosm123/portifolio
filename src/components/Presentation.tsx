import * as React from 'react';
 
import { Container } from "@mui/material";

 

interface presentationPropsI {
    text: string
}

export default function Presentation({ text }: presentationPropsI) {

    return (
        <>
        <div style={{paddingBottom: '1%'}}></div>
        <Container sx={{ display: 'flex', flexDirection: 'column', paddingBottom: 3 }}>
            <img src='/minhaFoto.jpg' alt='Minha Foto' style={{
                height: "20%",
                width: "20%",
                alignSelf: 'center',
                borderRadius: '50%',
                boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.1)"
            }}></img>
            <h1 className='text-center text-lg mt-6 text-white'  >{text}</h1>
        </Container>
        </>
        
    )
}