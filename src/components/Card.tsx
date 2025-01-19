

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

interface ProjectCardProps {
    imageURL: string,
    titleImage: string,
    titleCard: string,
    descriptionCard: string,
    urlProject: string
}


export default function ProjectCard({ imageURL, titleImage, titleCard, descriptionCard, urlProject }: ProjectCardProps) {



    return (
        <Card sx={{ width: 400, display: 'flex', flexDirection: 'column', height: 420, marginBottom: 2 }} >
            <CardMedia
                sx={{ height: 140 }}
                image={imageURL}
                title={titleImage}
                component={"img"}

            />
            <Box sx={{flex: 1, display: 'flex', flexDirection: "column"}}>
                <CardContent sx={{flex: 1}}>
                    <Typography gutterBottom variant="h5" component="div">
                        {titleCard}
                    </Typography>
                    <Typography variant="body2"  className='text-base text-[#4b5563]'>
                        {descriptionCard}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" href={urlProject}>Repositorio</Button>
                </CardActions>
            </Box>
        </Card>
    )
}