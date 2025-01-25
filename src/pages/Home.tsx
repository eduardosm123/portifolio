import * as React from 'react';
import ProjectCard from '../components/Card.tsx';
import NavBar from '../components/NavBar.tsx';
 

import { projects } from "../images/projects.ts"
import { Box } from '@mui/material';
import Presentation from '../components/Presentation.tsx';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../css/Home.css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
 

export default function Home() {


    return (
        < >
            <NavBar>
                <div data-testid="home" >
                    <Box  className='flex flex-col pb-1'>
                        <Presentation text='Olá, eu sou o Eduardo, veja a seguir os projetos mais recentes' />
                         
                         {/* Para telas menores */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <Swiper
                                modules={[Navigation, Pagination]}
                                spaceBetween={20}
                                slidesPerView={1}
                                navigation
                                pagination={{ clickable: true }}
                                loop={true}
                                 
                                className='pl-12 pb-5'
                            >
                                {projects.map((project) => (
                                    <SwiperSlide key={project.name}>
                                         <ProjectCard
                                                imageURL={project.image}
                                                urlProject={project.urlProject}
                                                titleCard={project.titleCard}
                                                titleImage={project.name}
                                                descriptionCard={project.descriptionCard}
                                            />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </Box>

                        {/* Para telas maiores */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
                        <Swiper
                                modules={[Navigation, Pagination]}
                                spaceBetween={20}
                                slidesPerView={3}
                                navigation
                                pagination={{ clickable: true }}
                                loop={true}
                                className='pb-4 pl_per_4'
                                 
                            >
                                {projects.map((project) => (
                                    <SwiperSlide key={project.name}>
                                         <ProjectCard
                                                imageURL={project.image}
                                                urlProject={project.urlProject}
                                                titleCard={project.titleCard}
                                                titleImage={project.name}
                                                descriptionCard={project.descriptionCard}
                                            />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </Box>

                    </Box>
                </div>
            </NavBar>

        </>
    );
}