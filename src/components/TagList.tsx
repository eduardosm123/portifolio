import { Box } from '@mui/material';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store'; 
import "../css/TagList.css"

interface listI {
    title: string,
    list: string[]
}
 

export default function TagList({ title, list }: listI) {
 
    const darkMode = useSelector((state: RootState) => state.theme.darkMode);

    return (
        <Box className=" ml-2 p-[1%]" >
            <article>
                <h2 className={darkMode ? "text-white font-bold" : "text-black font-bold"}>{title} </h2>
                <Box className="flex flex-wrap gap-7 mt-2"  >
                    {list.map((skill, index) => (
                        <Box key={index} className={!darkMode ? "text-white font-bold skill_dark bg-cover bg-center bg-no-repeat bg-fixed" : "text-black font-bold skill_white bg-cover bg-center bg-no-repeat bg-fixed"}  sx={{
                            backgroundImage: !darkMode ? `url(${process.env.PUBLIC_URL}/fundo-escuro.jpg)` : `url(${process.env.PUBLIC_URL}/fundo-branco.jpg)`,
                        }}    
                        >
                            {skill}
                        </Box>
                    ))}
                </Box>
            </article>
        </Box>
    )
}