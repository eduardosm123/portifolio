

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
 
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import ToggleSwitch from './ToggleSwitch.tsx';


interface NavbarProps {
    children: React.ReactNode;
}

const pages = ['Projetos', 'Sobre', 'Contato']


export default function NavBar({ children }: NavbarProps) {

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);


    const darkMode = useSelector((state: RootState) => state.theme.darkMode);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (
        <>
            <AppBar position='fixed' sx={{ top: "0px", background: darkMode ? "#111827" : "#4b5563" }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        {/* Menu para telas menores*/}
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            {/* Botão do menu */}
                            <IconButton
                                size="large"
                                aria-label="open navigation menu"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>

                            {/* Opções do menu */}
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{ display: { xs: 'block', md: 'none' } }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">
                                            <Link to={page === 'Projetos' ? '/' : `/${page.toLowerCase()}`} className='no-underline hover:text-[#38bdf8] text-black' >{page}</Link>
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                            <ToggleSwitch />
                        </Box>

                        {/* Menu para telas maiores */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <div className='w-4/5 flex items-center'>
                            {pages.map((page) => (
                                <Link key={page}   color='white' to={page === "Projetos" ? "/" : `/${page.toLowerCase()}`} className={ "hover:text-[#38bdf8] ml-4"}> {page} </Link>
                            ))}
                            </div>
                            
                            <div className=' flex items-center'>
                                <ToggleSwitch />
                            </div>
                        </Box>
                    </Toolbar>
                </Container>

            </AppBar>

            <Box component={"main"} sx={{ paddingTop: 10, background: darkMode ? "#1f2937" : "#f8fafc" }}>
                {children}
            </Box>
        </>
    )
}