import { Box } from '@mui/material';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store'; 


interface listI {
    title: string,
    list: string[]
}
 

export default function TagList({ title, list }: listI) {
 
    const darkMode = useSelector((state: RootState) => state.theme.darkMode);

    return (
        <Box sx={{ margin: "0% 1%", padding: "1%" }}>
            <article>
                <h2 className='text-white'>{title} </h2>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, marginTop: 2 }}>
                    {list.map((skill, index) => (
                        <Box key={index}
                            sx={{
                                background: darkMode ? "#f8fafc" : "#e5e7eb",
                                padding: "8px 12px",
                                borderRadius: "12px",
                                fontSize: "90%",
                                fontWeight: "bold",
                                color: "#333",
                                boxShadow: "5px 5px 8px rgba(0, 0, 0, 0.2)"
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