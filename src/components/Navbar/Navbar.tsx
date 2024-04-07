import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Button, Toolbar, Box, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { Menu as MenuIcon, MovieFilter } from '@mui/icons-material';
import theme from '../../../theme';

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: 'transparent',
                boxShadow: 'none',
                padding: '0.8rem',
                [theme.breakpoints.down('customBreak1')]: {
                    padding: '0.5rem',
                },
            }}
        >
            <Toolbar>
                <Box component="div" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', columnGap: '1rem' }}>
                    <IconButton
                        color="inherit"
                        aria-label="menu"
                        size='large'
                        component={Link}
                        to="/">
                        <MovieFilter
                            fontSize='large'
                        />
                    </IconButton>
                    <Typography variant="h3" fontWeight={"700"}>
                        SERIEFLIX
                    </Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    columnGap: '2rem',
                    [theme.breakpoints.down('customBreak1')]: {
                        display: 'none',
                    },
                }}>
                    <Button color="inherit" component={Link} to="/">
                        <Typography variant="h5" color={'white'}>Inicio</Typography>
                    </Button>
                    <Button color="inherit" component={Link} to="/">
                        <Typography variant="h5" color={'white'}>Mi perfil</Typography>
                    </Button>
                    <Button color="inherit" component={Link} to="/">
                        <Typography variant="h5" color={'white'}>Mis favoritos</Typography>
                    </Button>
                </Box>
                <Box sx={{
                    [theme.breakpoints.up('customBreak1')]: {
                        display: 'none'
                    },
                }}>
                    <IconButton
                        color="inherit"
                        aria-label="menu"
                        onClick={handleClick}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}>Mi perfil</MenuItem>
                        <MenuItem onClick={handleClose}>Mis favoritos</MenuItem>
                        <MenuItem onClick={handleClose}>Cerrar sesión</MenuItem>
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
