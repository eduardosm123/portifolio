

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

import "../css/Card.css"
interface ProjectCardProps {
    imageURL: string,
    titleImage: string,
    titleCard: string,
    descriptionCard: string,
    urlProject: string
}


export default function ProjectCard({ imageURL, titleImage, titleCard, descriptionCard, urlProject }: ProjectCardProps) {



    return (
        <Card className='card_size flex flex-col mb-2' >
            <CardMedia
                className='h-[30%]'
                image={imageURL}
                title={titleImage}
                component={"img"}

            />
            <Box className="flex-1 flex flex-col">
                <CardContent className="flex-1" >
                    <Typography gutterBottom variant="h5" component="div">
                        {titleCard}
                    </Typography>
                    <Typography variant="body2"  className='text-base text-[#4b5563]  text-justify'>
                        {descriptionCard}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small"  target='_blank'  rel="noopener noreferrer"  href={urlProject}>Repositorio</Button>
                </CardActions>
            </Box>
        </Card>
    )
}