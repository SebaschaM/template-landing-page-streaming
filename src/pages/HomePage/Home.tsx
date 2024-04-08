import { Link } from "react-router-dom";
import theme from "../../../theme";
import { BackgroundImageStyle, ListItemMovies, Navbar, Footer } from "../../components";
import { Box, Typography, Button, Grid, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
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
                            fontSize: '2.8rem',
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
                            [theme.breakpoints.down('md')]: {
                                width: '12rem',
                            },
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
                padding: '3.5rem 0',
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
                        marginBottom: '3rem',
                        fontWeight: '700',
                        textAlign: 'center',
                        color: 'black',
                        [theme.breakpoints.down('lg')]: {
                            fontSize: '1.8rem',
                        },
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
                                        margin: 'auto',
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
                                                fontSize: '1.5rem',
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
                                                fontSize: '1.1rem',
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
                                        margin: 'auto',
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
                                                fontSize: '1.5rem',
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
                                                fontSize: '1.1rem',
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
                                        margin: 'auto',
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
                                                fontSize: '1.5rem',
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
                                                fontSize: '1.1rem',
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
            <Box
                sx={{
                    padding: '3rem 0',
                    width: '70%',
                    margin: '0 auto',
                    [theme.breakpoints.down('lg')]: {
                        width: '85%',
                    },
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        textAlign: 'center',
                        paddingBottom: '2rem',
                        [theme.breakpoints.down('lg')]: {
                            fontSize: '1.5rem   ',
                        },
                    }}
                >Preguntas frecuentes</Typography>
                <Accordion
                    sx={{
                        backgroundColor: '#E6E6E6',
                        '&:hover': {
                            opacity: '0.97',
                        },
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography variant="h5"
                            sx={{
                                [theme.breakpoints.down('lg')]: {
                                    fontSize: '0.95rem',
                                },
                            }}
                        >¿Cómo puedo comenzar a ver contenido en SerieFlix?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body1"
                            sx={{
                                [theme.breakpoints.down('lg')]: {
                                    fontSize: '0.95rem',
                                },
                            }}
                        >
                            Para empezar a disfrutar del vasto catálogo de SeriesFlix, simplemente visita nuestro sitio web o descarga nuestra aplicación móvil desde la tienda de aplicaciones correspondiente a tu dispositivo. Una vez que te hayas registrado o iniciado sesión en tu cuenta, podrás navegar por nuestras categorías, buscar tus series favoritas o descubrir nuevos títulos para ver.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    sx={{
                        backgroundColor: '#E6E6E6',
                        '&:hover': {
                            opacity: '0.97',
                        },
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography variant="h5"
                            sx={{
                                [theme.breakpoints.down('lg')]: {
                                    fontSize: '0.95rem',
                                },
                            }}>¿Cuáles son las opciones de suscripción disponibles y qué incluyen?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body1"
                            sx={{
                                [theme.breakpoints.down('lg')]: {
                                    fontSize: '0.95rem',
                                },
                            }}
                        >
                            Ofrecemos una variedad de opciones de suscripción para adaptarnos a las necesidades de nuestros usuarios. Nuestras suscripciones pueden incluir acceso ilimitado a nuestro catálogo completo de series, la capacidad de ver en múltiples dispositivos simultáneamente, descargas offline para ver sin conexión a internet, y contenido en calidad HD o incluso Ultra HD, dependiendo del plan seleccionado.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    sx={{
                        backgroundColor: '#E6E6E6',
                        '&:hover': {
                            opacity: '0.97',
                        },
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography variant="h5"
                            sx={{
                                [theme.breakpoints.down('lg')]: {
                                    fontSize: '0.95rem',
                                },
                            }}>¿Puedo compartir mi cuenta con familiares o amigos?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body1"
                            sx={{
                                [theme.breakpoints.down('lg')]: {
                                    fontSize: '0.95rem',
                                },
                            }}
                        >
                            Sí, entendemos que compartir experiencias de entretenimiento es importante. SerieFlix permite que los usuarios compartan sus cuentas con familiares o amigos, dependiendo del plan de suscripción seleccionado. Sin embargo, es importante recordar que la cantidad de dispositivos simultáneos permitidos puede variar según el plan, por lo que es importante revisar los detalles de tu suscripción.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    sx={{
                        backgroundColor: '#E6E6E6',
                        '&:hover': {
                            opacity: '0.97',
                        },
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography variant="h5"
                            sx={{
                                [theme.breakpoints.down('lg')]: {
                                    fontSize: '0.95rem',
                                },
                            }} >¿Cómo puedo descargar contenido para verlo sin conexión?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body1"
                            sx={{
                                [theme.breakpoints.down('lg')]: {
                                    fontSize: '0.95rem',
                                },
                            }}
                        >
                            SerieFlix ofrece la conveniente opción de descargar contenido para verlo más tarde, sin necesidad de una conexión a internet. Para descargar un episodio o película, simplemente navega hasta el título que deseas ver, y busca el ícono de descarga. Una vez descargado, podrás acceder a ese contenido en tu dispositivo móvil, tablet u otro dispositivo compatible, incluso cuando no estés conectado a internet.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    sx={{
                        backgroundColor: '#E6E6E6',
                        '&:hover': {
                            opacity: '0.97',
                        },
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography variant="h5"
                            sx={{
                                [theme.breakpoints.down('lg')]: {
                                    fontSize: '0.95rem',
                                },
                            }}>¿Qué medidas de seguridad tienen implementadas para proteger la privacidad de mis datos?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body1"
                            sx={{
                                [theme.breakpoints.down('lg')]: {
                                    fontSize: '0.95rem',
                                },
                            }}
                        >
                            En SerieFlix, nos tomamos muy en serio la privacidad y seguridad de nuestros usuarios. Implementamos medidas de seguridad avanzadas para proteger la información personal y los datos de nuestros usuarios, incluyendo cifrado de extremo a extremo, protección contra accesos no autorizados, y políticas estrictas de privacidad que cumplen con las regulaciones vigentes. Además, ofrecemos opciones de configuración de privacidad para que los usuarios controlen cómo se utilizan sus datos dentro de la plataforma.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>
            <Footer />
        </>
    );
}

export default Home;