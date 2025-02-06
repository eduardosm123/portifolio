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

    const originalConsoleWarn = console.warn;

    console.warn = (...args) => {
        if (args[0]?.includes('Swiper Loop Warning')) {
            return; // Ignora warnings específicos do Swiper
        }
        originalConsoleWarn(...args); // Mantém outros warnings
    };
 
    return (
        < >
            <NavBar>
                <div data-testid="home"  className='min-h-screen'>
                    <Box className='flex flex-col pb-1'>
                        <Presentation link={true} text='Olá! Sou Eduardo Magalhães, um desenvolvedor Front-end com experiência em React, TypeScript e Node.js. Sempre busco inovação e soluções criativas para desafios digitais. Quer saber mais sobre meu trabalho? Estou aberto a novas oportunidades e colaborações. Vamos conversar!' />
                        
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
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
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