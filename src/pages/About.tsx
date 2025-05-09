
import { Box } from '@mui/material';
import NavBar from '../components/NavBar.tsx';
import * as React from 'react';
import Presentation from "../components/Presentation.tsx";
import TagList from '../components/TagList.tsx';

import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
export default function About() {

    const skillFrontEnd = ["React", "Redux", "HTML", "CSS", "Javascript", "Typescript", "Material UI", "Styled Component", "Tailwind", "SASS", "React Query", "Context API"];
    const skillBackend = ["Node.js", "Express.js", "Python", "Java", "Spring Boot"];
    const skillDataSet = ["MongoDB", "PostgreSQL", "MySQL"];
    const skillLanguage = ["Inglês"];
    const skillMethodology = ["Scrum", "Kanban"];
    const skillOthers = ["GitHub", "GitLab", "Docker", "Linux"];

    const darkMode = useSelector((state: RootState) => state.theme.darkMode);
    return (
        <>
            <NavBar>
                <div data-testid="about" className='min-h-screen'>
                    <Box className='flex flex-col pb-1'>
                        <Presentation text="Veja mais sobre minha jornada como desenvolvedor front-end" />
                    </Box>
                    <Box className='m-5 p-5 rounded-xl shadow-xl' style={{
                        backgroundImage: !darkMode ? `url(${process.env.PUBLIC_URL}/fundo-escuro.jpg)` : `url(${process.env.PUBLIC_URL}/fundo-branco.jpg)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundAttachment: 'fixed'
                    }}>
                        <article>
                            <p className={darkMode ? " text-xl  text-justify text-black" : "text-xl  text-justify text-white"}>
                                <span className='font-bold'>Itaipu Parquetec:</span> Durante esse período, de 2 anos, como estagiário,
                                atuei no desenvolvimento front-end de interfaces por meio do framework React, criando formulários, testando bibliotecas,
                                realizando a correção de bugs, desenvolvendo documentações e fazendo o monitoramento do banco de dados.
                            </p>
                            <p className={darkMode ? "mt-5 text-xl  text-justify text-black" : "mt-5 text-xl  text-justify text-white"}>
                                <span className='font-bold'>Experiência acadêmica: </span>
                                Durante meu período acadêmico, tive a oportunidade de desenvolver variados
                                projetos simulando situações reais. Nesses projetos, atuei principalmente no
                                desenvolvimento frontend usando frameworks como React.js, Next.js e um pouco de Vue.js.
                            </p>
                            <p className={darkMode ? "mt-5 text-xl  text-justify text-black" : "mt-5 text-xl  text-justify text-white"}>
                                <span className='font-bold'>Projetos:</span> Recentemente, em janeiro de 2025,
                                desenvolvi três aplicações: A primeira com React, Express, Javascript, Redux,
                                Bootstrap e Mongoose; A segunda com React, Express, Typescript, Redux, Bootstrap e Mongoose;
                                A terceira com React, Material UI, Typescript, Redux e Tailwind.
                            </p>
                        </article>
                    </Box>
                    <TagList title='Habilidades em Front-End:' list={skillFrontEnd}></TagList>
                    <TagList title='Habilidades em Back-End:' list={skillBackend}></TagList>
                    <TagList title='Habilidades em Banco de Dados:' list={skillDataSet}></TagList>
                    <TagList title='Habilidades em Idiomas:' list={skillLanguage}></TagList>
                    <TagList title='Habilidades em Metodologias:' list={skillMethodology}></TagList>
                    <TagList title='Outros:' list={skillOthers}></TagList>
                </div>
            </NavBar>
        </>
    )
}