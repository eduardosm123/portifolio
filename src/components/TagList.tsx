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
                <h2 style={{ color: darkMode ? "white" : "black" }}>{title} </h2>
                <Box className="flex flex-wrap gap-7 mt-2"  >
                    {list.map((skill, index) => (
                        <Box key={index} className={darkMode ? "skill_dark" : "skill_white"}      
                        >
                            {skill}
                        </Box>
                    ))}
                </Box>
            </article>
        </Box>
    )
}