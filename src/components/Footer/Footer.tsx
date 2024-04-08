import { Send } from '@mui/icons-material';
import { useState, useEffect } from 'react';
import { Box, Container, IconButton, TextField, Typography } from '@mui/material';
import theme from '../../../theme';

const FooterSection = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            {windowWidth <= 1200 ? (
                <Box sx={{
                    display: 'flex',
                    width: '100%',
                    columnGap: '3rem',
                    [theme.breakpoints.down('customBreak3')]: {
                        width: '100%',
                        margin: 'auto',
                        justifyContent: 'space-between',
                    },
                    [theme.breakpoints.down('customBreak1')]: {
                        justifyContent: 'space-between',
                    },
                }}>
                    {/* VERSION MOVIL */}
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        rowGap: '1.5rem',
                    }}>
                        <Typography variant="h3" color='secondary' fontWeight={"700"} sx={{
                            [theme.breakpoints.down('customBreak3')]: {
                                fontSize: '1.6rem',
                            },
                        }}>
                            SERIEFLIX
                        </Typography>
                        <Box>
                            <Typography variant="body2" color={'black'} style={{ marginBottom: '0.5rem' }}>Términos y condiciones</Typography>
                            <Typography variant="body2" color={'black'} style={{ marginBottom: '0.5rem' }}>Política de privacidad</Typography>
                            <Typography variant="body2" color={'black'}>Política de cookies</Typography>
                        </Box>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        rowGap: '1.5rem',
                        [theme.breakpoints.up('customBreak3')]: {
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        },
                    }}>
                        <Box>
                            <Typography variant="body2" color={'black'} style={{ marginBottom: '0.5rem' }}>contact.me@serieflix.com</Typography>
                            <Typography variant="body2" color={'black'} style={{ marginBottom: '0.5rem' }}>contact.me@serieflix.com</Typography>
                            <Typography variant="body2" color={'black'}>0-800-52352</Typography>
                        </Box>
                        <Box>
                            <Typography variant="body2" color={'black'} style={{ marginBottom: '0.5rem' }}>© 2024 Serieflix</Typography>
                            <Typography variant="body2" color={'black'}>Desarrollado por Sebastián Chaquila</Typography>
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            [theme.breakpoints.down('customBreak1')]: {
                                display: 'none'
                            }
                        }}
                    >
                        <Typography variant="body2" color={'black'} fontWeight={'700'}>¿Deseas recibir recomendaciones sobre películas?</Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                columnGap: '1rem',
                            }}
                        >
                            <TextField
                                sx={{ marginTop: '1rem' }}
                                size='small'
                                id="outlined-basic"
                                type='email'
                                label="Correo electrónico"
                                variant="outlined"
                                fullWidth
                                InputLabelProps={{ style: { fontSize: '0.9rem' } }}
                                inputProps={{ style: { fontSize: '0.9rem' } }}
                            />
                            <IconButton
                                sx={{ marginTop: '1rem' }}
                                color="inherit"
                                aria-label="menu"
                                size='large'
                            >
                                <Send fontSize='medium' />
                            </IconButton>
                        </Box>
                    </Box>
                </Box>
            ) : (
                <>
                    {/* VERSION ESCRITORIO */}
                    <Typography variant="h3" color='secondary' fontWeight={"700"}>
                        SERIEFLIX
                    </Typography>
                    <Box>
                        <Typography variant="body2" color={'black'} style={{ marginBottom: '0.5rem' }}>Términos y condiciones</Typography>
                        <Typography variant="body2" color={'black'} style={{ marginBottom: '0.5rem' }}>Política de privacidad</Typography>
                        <Typography variant="body2" color={'black'}>Política de cookies</Typography>
                    </Box>

                    <Box>
                        <Typography variant="body2" color={'black'} style={{ marginBottom: '0.5rem' }}>contact.me@serieflix.com</Typography>
                        <Typography variant="body2" color={'black'} style={{ marginBottom: '0.5rem' }}>contact.me@serieflix.com</Typography>
                        <Typography variant="body2" color={'black'}>0-800-52352</Typography>
                    </Box>
                    <Box>
                        <Typography variant="body2" color={'black'} style={{ marginBottom: '0.5rem' }}>© 2024 Serieflix</Typography>
                        <Typography variant="body2" color={'black'}>Desarrollado por Sebastián Chaquila</Typography>
                    </Box>

                    <Box>
                        <Typography variant="body2" color={'black'} fontWeight={'700'}>¿Deseas recibir recomendaciones sobre películas?</Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                columnGap: '1rem',
                            }}
                        >
                            <TextField
                                sx={{ marginTop: '1rem' }}
                                size='small'
                                id="outlined-basic"
                                type='email'
                                label="Correo electrónico"
                                variant="outlined"
                                fullWidth
                                InputLabelProps={{ style: { fontSize: '0.9rem' } }}
                                inputProps={{ style: { fontSize: '0.9rem' } }}
                            />
                            <IconButton
                                sx={{ marginTop: '1rem' }}
                                color="inherit"
                                aria-label="menu"
                                size='large'
                            >
                                <Send fontSize='medium' />
                            </IconButton>
                        </Box>
                    </Box>
                </>
            )}
        </>
    )
}

const Footer = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: '#f5f5f5',
                padding: '3rem 0',
                marginTop: 'auto',

            }}
        >
            <Container
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    margin: 'auto',
                }}
            >

                {windowWidth <= 820 ? (
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            rowGap: '1.5rem',
                            width: '100%',
                        }}
                    >
                        {/* VERSION MOVIL */}
                        <FooterSection />

                        <Box>
                            <Typography variant="body2" color={'black'} fontWeight={'700'}>¿Deseas recibir recomendaciones sobre películas?</Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    columnGap: '1rem',
                                }}
                            >
                                <TextField
                                    sx={{ marginTop: '1rem' }}
                                    size='small'
                                    id="outlined-basic"
                                    type='email'
                                    label="Correo electrónico"
                                    variant="outlined"
                                    fullWidth
                                    InputLabelProps={{ style: { fontSize: '0.9rem' } }}
                                    inputProps={{ style: { fontSize: '0.9rem' } }}
                                />
                                <IconButton
                                    sx={{ marginTop: '1rem' }}
                                    color="inherit"
                                    aria-label="menu"
                                    size='large'
                                >
                                    <Send fontSize='medium' />
                                </IconButton>
                            </Box>
                        </Box>

                    </Box>
                ) : (
                    <FooterSection />
                )}

            </Container >
        </Box >
    );
};

export default Footer;
