import { Box, Button, Card, Checkbox, Container, FormControl, FormControlLabel, IconButton, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Apple, Google, Visibility, VisibilityOff } from '@mui/icons-material';
import { BackgroundImageStyle, Navbar } from '../../components';

const Login = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = (data: any) => {
        console.log(data);
        navigate('/home');
        reset();
    }

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Box>
            <BackgroundImageStyle />
            <Navbar />
            <Container
                sx={{
                    marginTop: '8rem',
                }}
            >
                <FormControl
                    component={'form'}
                    onSubmit={handleSubmit(onSubmit)}
                    sx={{
                        margin: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        width: '35rem',
                    }}
                >
                    <Card sx={{
                        padding: '2rem',
                    }}>
                        <Typography variant="h3" sx={{ textAlign: 'center', color: 'black', marginBottom: '3rem', textTransform: 'uppercase' }}>
                            Iniciar sesión
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                rowGap: '1.5rem',
                            }}
                        >
                            <Box>
                                <TextField
                                    id="outlined-basic"
                                    label="Correo electrónico"
                                    variant="outlined"
                                    type='email'
                                    fullWidth
                                    {...register('email', { required: true })}
                                />
                                {errors.email && <Typography color={'red'}>Este campo es requerido</Typography>}
                            </Box>
                            <Box>
                                <TextField
                                    id="outlined-password"
                                    label="Contraseña"
                                    variant="outlined"
                                    type={showPassword ? 'text' : 'password'}
                                    fullWidth
                                    InputProps={{
                                        endAdornment: (
                                            <IconButton
                                                onClick={handleTogglePasswordVisibility}
                                                edge="end"
                                                aria-label="toggle password visibility"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        ),
                                    }}
                                    {...register('password', { required: true })}
                                />
                                {errors.password && <Typography color={'red'}>Este campo es requerido</Typography>}
                            </Box>
                            <Typography variant="h6" sx={{ color: 'black', textAlign: 'right' }}>
                                <Link to="/register" style={{
                                    color: 'black',
                                    textDecoration: 'none',
                                }}>Olvidé mi contraseña</Link>
                            </Typography>
                        </Box>
                        <FormControlLabel control={<Checkbox defaultChecked />} sx={{ width: 'fit-content', marginBottom: '1rem' }} label="Recuérdame" />
                        <Box
                            sx={{
                                marginTop: '2rem',
                                display: 'flex',
                                flexDirection: 'column',
                                rowGap: '1.5rem',
                            }}
                        >
                            <Button
                                variant="contained"
                                sx={{
                                    width: '100%',
                                    backgroundColor: '#941B0C',
                                    padding: '0.5rem',
                                    color: 'white',
                                    '&:hover': {
                                        backgroundColor: '#941B0C',
                                    },
                                }}
                                type='submit'
                            >
                                <Typography>Iniciar sesión</Typography>
                            </Button>
                            <Button
                                variant="contained"
                                sx={{
                                    width: '100%',
                                    backgroundColor: 'white',
                                    padding: '0.5rem',
                                    color: 'black',
                                    '&:hover': {
                                        backgroundColor: 'white',
                                    },
                                }}
                            >
                                <Google sx={{ color: 'black' }} />
                                <Typography sx={{ color: 'black', marginLeft: '0.5rem' }}>Iniciar sesión con Google</Typography>
                            </Button>
                            <Button
                                variant="contained"
                                sx={{
                                    width: '100%',
                                    backgroundColor: 'black',
                                    padding: '0.5rem',
                                    color: 'white',
                                    '&:hover': {
                                        backgroundColor: 'black',
                                    },
                                }}
                            >
                                <Apple sx={{ color: 'white' }} />
                                <Typography sx={{ color: 'white', marginLeft: '0.5rem' }}>Iniciar sesión con Apple</Typography>
                            </Button>
                        </Box>
                        <Typography variant="h6" sx={{ color: 'black', textAlign: 'center', marginTop: '2rem' }}>
                            ¿No tienes una cuenta? <Link to="/register" style={{
                                color: 'black',
                                textDecoration: 'none',
                            }}>Regístrate</Link>
                        </Typography>
                    </Card>
                </FormControl>
            </Container>
        </Box>
    );
};

export default Login;
