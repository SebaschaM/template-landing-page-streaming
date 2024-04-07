import { Link } from "react-router-dom";
import theme from "../../../theme";
import { BackgroundImageStyle, ListItemMovies, Navbar } from "../../components";
import { Box, Typography, Button, Grid } from "@mui/material";
import styles from './HomeStyle.module.css';

const Home = () => {
    return (
        <>
            <BackgroundImageStyle />
            <Box position={'relative'}>
                <Navbar />
                <Box sx={{
                    height: '100vh',
                    overflow: 'hidden',
                    display: 'flex',
                    rowGap: '3rem',
                    flexDirection: 'column',
                }}
                >

                    <Typography variant="h1" sx={{
                        color: 'white',
                        textAlign: 'center',
                        paddingTop: '30vh',
                        [theme.breakpoints.down('md')]: {
                            fontSize: '4rem',
                        },
                        [theme.breakpoints.down('customBreak1')]: {
                            fontSize: '3rem',
                        },
                        [theme.breakpoints.down('sm')]: {
                            fontSize: '2rem',
                        },
                        [theme.breakpoints.down('customBreak2')]: {
                            fontSize: '1.7rem',
                        },
                    }}>
                        Bienvenido a SerieFLIX
                    </Typography>

                    <Button
                        color="secondary"
                        variant="contained"
                        sx={{
                            width: '15rem',
                            padding: '0.8rem',
                            fontSize: '1.1rem',
                            alignSelf: 'center',
                        }}>
                        <Link
                            to="/login"
                            style={{
                                textDecoration: 'none',
                                color: 'white',
                            }}
                        >
                            Iniciar sesión
                        </Link>
                    </Button>
                </Box>
            </Box>
            <ListItemMovies />
            <Box sx={{
                backgroundColor: 'rgba(247, 247, 247, 1)',
                borderRadius: '4rem',
                paddingTop: '2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',

            }}>
                <Box
                    sx={{
                        maxWidth: '85%',
                    }}
                >
                    <Typography variant="h2" sx={{
                        margin: '4rem 0',
                        fontWeight: '700',
                        textAlign: 'center',
                        color: 'black',
                    }}>
                        ¿Por qué elegir SerieFLIX?
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        rowGap: '2rem',
                        [theme.breakpoints.down('lg')]: {
                            flexDirection: 'row',
                        },
                        [theme.breakpoints.down('md')]: {
                            flexDirection: 'column',
                        },
                    }}>
                        <Grid container alignItems="center" spacing={0} sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    [theme.breakpoints.down('lg')]: {
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    },
                                }}
                            >
                                <Grid item xs={12} md={5} sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    [theme.breakpoints.down('lg')]: {
                                        maxWidth: '100%',
                                    },
                                }}>
                                    <img
                                        style={{
                                            width: '50%',
                                            maxWidth: '100%',
                                            height: 'auto',
                                            objectFit: 'cover',
                                            borderRadius: '2rem',
                                        }}
                                        src="https://res.cloudinary.com/dvzjgzqbn/image/upload/v1712464229/Otros/gwb8xugna0npa4e32izm.png"
                                        alt="Serieflix"
                                        className={styles.img}
                                    />
                                </Grid>
                                <Grid item xs={12} md={7}
                                    sx={{
                                        [theme.breakpoints.down('lg')]: {
                                            maxWidth: '80%',
                                        },
                                        [theme.breakpoints.down('customBreak2')]: {
                                            maxWidth: '90%',
                                        },
                                    }}
                                >
                                    <Typography variant="h3"
                                        sx={{
                                            textAlign: 'center',
                                            marginBottom: '3rem',
                                            color: 'black',
                                            fontWeight: '700',
                                            [theme.breakpoints.down('lg')]: {
                                                fontSize: '1.7rem',
                                            },
                                        }}
                                    >Experiencia Personalizada</Typography>
                                    <Typography variant="h5"
                                        sx={{
                                            color: 'black',
                                            padding: '0 10rem',
                                            fontWeight: '400',
                                            width: '100%',
                                            textAlign: 'center',
                                            [theme.breakpoints.down('lg')]: {
                                                padding: '0',
                                                fontSize: '1.2rem',
                                            },
                                        }}>
                                        SerieFLIX ofrece una experiencia de entretenimiento personalizada. Con funciones como recomendaciones personalizadas y perfiles de usuario individuales, la plataforma se adapta a tus preferencias y te sugiere contenido que probablemente te encantará. Ya sea que te gusten los dramas emocionantes, las comedias ligeras o los documentales informativos, SerieFLIX tiene algo para ti.
                                    </Typography>
                                </Grid>
                            </Box>
                        </Grid>
                        <Grid container alignItems="center" spacing={0} sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    [theme.breakpoints.down('lg')]: {
                                        flexDirection: 'column-reverse',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    },
                                }}
                            >
                                <Grid item xs={12} md={7}
                                    sx={{
                                        [theme.breakpoints.down('lg')]: {
                                            maxWidth: '80%',
                                        },
                                        [theme.breakpoints.down('customBreak2')]: {
                                            maxWidth: '90%',
                                        },
                                    }}
                                >
                                    <Typography variant="h3"
                                        sx={{
                                            textAlign: 'center',
                                            marginBottom: '3rem',
                                            color: 'black',
                                            fontWeight: '700',
                                            [theme.breakpoints.down('lg')]: {
                                                fontSize: '1.7rem',
                                            },
                                        }}
                                    >Calidad de Transmisión Superior</Typography>
                                    <Typography variant="h5"
                                        sx={{
                                            color: 'black',
                                            padding: '0 10rem',
                                            fontWeight: '400',
                                            width: '100%',
                                            textAlign: 'center',
                                            [theme.breakpoints.down('lg')]: {
                                                padding: '0',
                                                fontSize: '1.2rem',
                                            },
                                        }}>
                                        Disfruta de una calidad de transmisión superior con SerieFLIX. La plataforma utiliza tecnología de vanguardia para ofrecer contenido en alta definición y, en algunos casos, incluso en resolución 4K. Con una conexión a Internet estable, puedes sumergirte en una experiencia de visualización inmersiva y cristalina desde la comodidad de tu hogar.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={5} sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    [theme.breakpoints.down('lg')]: {
                                        maxWidth: '100%',
                                    },
                                }}>
                                    <img
                                        style={{
                                            width: '50%',
                                            maxWidth: '100%',
                                            height: 'auto',
                                            objectFit: 'cover',
                                            borderRadius: '2rem',
                                        }}
                                        className={styles.img}
                                        src="https://res.cloudinary.com/dvzjgzqbn/image/upload/v1712464229/Otros/gwb8xugna0npa4e32izm.png"
                                        alt="Serieflix"
                                    />
                                </Grid>
                            </Box>
                        </Grid>
                        <Grid container alignItems="center" spacing={0} sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    [theme.breakpoints.down('lg')]: {
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    },
                                }}
                            >
                                <Grid item xs={12} md={5} sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    [theme.breakpoints.down('lg')]: {
                                        maxWidth: '100%',
                                    },
                                }}>
                                    <img
                                        style={{
                                            width: '50%',
                                            maxWidth: '100%',
                                            height: 'auto',
                                            objectFit: 'cover',
                                            borderRadius: '2rem',
                                        }}
                                        className={styles.img}
                                        src="https://res.cloudinary.com/dvzjgzqbn/image/upload/v1712464229/Otros/gwb8xugna0npa4e32izm.png"
                                        alt="Serieflix"
                                    />
                                </Grid>
                                <Grid item xs={12} md={7}
                                    sx={{
                                        [theme.breakpoints.down('lg')]: {
                                            maxWidth: '80%',
                                        },
                                        [theme.breakpoints.down('customBreak2')]: {
                                            maxWidth: '90%',
                                        },
                                    }}
                                >
                                    <Typography variant="h3"
                                        sx={{
                                            textAlign: 'center',
                                            marginBottom: '3rem',
                                            color: 'black',
                                            fontWeight: '700',
                                            [theme.breakpoints.down('lg')]: {
                                                fontSize: '1.7rem',
                                            },
                                        }}
                                    >Acceso Multiplataforma</Typography>
                                    <Typography variant="h5"
                                        sx={{
                                            color: 'black',
                                            padding: '0 10rem',
                                            fontWeight: '400',
                                            width: '100%',
                                            textAlign: 'center',
                                            [theme.breakpoints.down('lg')]: {
                                                padding: '0',
                                                fontSize: '1.2rem',
                                            },
                                        }}>
                                        Con SerieFLIX, puedes acceder a tu contenido favorito desde una variedad de dispositivos. Ya sea que prefieras ver en tu televisor inteligente, computadora portátil, tableta o teléfono inteligente, SerieFLIX te brinda la flexibilidad para disfrutar del entretenimiento dondequiera que estés. Además, puedes continuar viendo desde donde lo dejaste en cualquier dispositivo, lo que te permite una transición perfecta entre pantallas.
                                    </Typography>
                                </Grid>
                            </Box>
                        </Grid>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default Home;