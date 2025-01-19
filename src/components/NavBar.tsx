 

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

interface NavbarProps {
    children: React.ReactNode;
}

const pages = ['Projetos', 'Sobre', 'Contato']

export default function NavBar({ children }: NavbarProps) {

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
     

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

  
    return (
        <>
            <AppBar position='fixed' sx={{ top: "0px", background: "#111827"}}>
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
                        </Box>

                        {/* Menu para telas maiores */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    href={page === 'Projetos' ? '/' : `/${page.toLowerCase()}`}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                    className='hover:text-[#38bdf8]'
                                >
                                     {page}
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>

            </AppBar>

            <Box component={"main"} sx={{ paddingTop: 10, background: "#1f2937" }}>
                {children}
            </Box>
        </>
    )
}