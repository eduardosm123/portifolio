
import { Box } from '@mui/material';
import NavBar from '../components/NavBar.tsx';
import * as React from 'react';
import Presentation from "../components/Presentation.tsx";
import TagList from '../components/TagList.tsx';
export default function About() {

    const skillFrontEnd = ["React", "Redux", "HTML", "CSS", "Javascript", "Typescript", "Material UI", "Styled Component"]
    const skillBackend = ["Node.js", "Express.js", "Python", "Java", "SpringBoot"]
    const skillDataSet = ["MongoDB", "PostgreSQL", "MySQL"]
    const skillLanguage = ["Inglês"]
    const skillMethodology = ["Scrum", "Kanban"]
    const skillOthers = ["Github", "GitLab", "Docler", "Linux"]
    return (
        <>
            <NavBar>
                <div>
                    <Box sx={{ display: 'flex', flexDirection: 'column', paddingBottom: 1 }}>
                        <Presentation text="Veja mais sobre minha Jornada como Desenvolvedor Front-end" />
                    </Box>
                    <Box className='bg-[#f8fafc] m-5 p-5 rounded-xl' >
                        <article>
                            <p className='text-xl'>
                                <span  className='font-bold'>Itaipu Parquetec:</span> Durante esse período, de 2 anos, como estagiário,
                                atuei no desenvolvimento front end de interfaces por meio do framework React, criando formulários, testando bibliotecas,
                                realizando a correção de bugs, desenvolvendo documentações e fazendo o monitoramento do banco de dados.
                            </p>
                            <p className='mt-5 text-xl'>
                                <span className='font-bold'>Experiência acadêmica: </span>
                                Durante meu período acadêmico, tive a oportunidade de desenvolver variados
                                projetos simulando situações reais. Nesses projetos, atuei principalmente no
                                desenvolvimento frontend usando frameworks como React.js, Next.js e um pouco de Vue.js.
                            </p>
                            <p className='mt-5 text-xl'>
                                <span  className='font-bold'>Projetos:</span> Recentemente, em janeiro de 2025,
                                também desenvolvi três aplicações usando React: a primeira utiliza no frontend (React, Redux, Bootstrap e Javascript),
                                com backend de (Express, Mongoose e Javascript), a segunda aplicação usa no frontend (React, Redux, Bootstrap e Typescript)
                                com backend (Express, Mongoose e Typescript), sendo a terceira o portfólio onde no frontend foi utilizado
                                (React, Redux, Material UI e Typescript).
                            </p>
                        </article>
                    </Box>
                    <TagList title='Habilidades em Front End:' list={skillFrontEnd}></TagList>
                    <TagList title='Habilidades em Back End:' list={skillBackend}></TagList>
                    <TagList title='Habilidades em Banco de Dados:' list={skillDataSet}></TagList>
                    <TagList title='Habilidades em Idiomas:' list={skillLanguage}></TagList>
                    <TagList title='Habilidades em Metodologias:' list={skillMethodology}></TagList>
                    <TagList title='Outros:' list={skillOthers}></TagList>
                </div>
            </NavBar>
        </>
    )
}