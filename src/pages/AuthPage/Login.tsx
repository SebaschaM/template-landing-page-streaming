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
                    marginTop: '2rem',
                }}
            >
                <FormControl
                    component={'form'}
                    onSubmit={handleSubmit(onSubmit)}
                    sx={{
                        margin: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        width: '21rem',
                    }}
                >
                    <Card sx={{
                        padding: '2rem',
                    }}>
                        <Typography variant="h4" sx={{ textAlign: 'center', color: 'black', marginBottom: '1.7rem', textTransform: 'uppercase' }}>
                            Iniciar sesión
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <Box sx={{ marginBottom: '1rem' }}>
                                <TextField
                                    id="outlined-basic"
                                    label="Correo electrónico"
                                    variant="outlined"
                                    type='email'
                                    fullWidth
                                    size='small'
                                    InputLabelProps={{ style: { fontSize: '0.9rem' } }}
                                    inputProps={{ style: { fontSize: '0.9rem' } }}
                                    {...register('email', { required: true })}
                                />
                                {errors.email && <Typography color={'red'} variant='body2'>Este campo es requerido</Typography>}
                            </Box>
                            <Box>
                                <TextField
                                    id="outlined-password"
                                    label="Contraseña"
                                    size='small'
                                    variant="outlined"
                                    type={showPassword ? 'text' : 'password'}
                                    fullWidth
                                    InputLabelProps={{ style: { fontSize: '0.9rem' } }}
                                    inputProps={{ style: { fontSize: '0.9rem' } }}
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
                                {errors.password && <Typography color={'red'} variant='body2'>Este campo es requerido</Typography>}
                            </Box>
                            <Typography variant="body2" sx={{ color: 'black', textAlign: 'right', marginTop: '0.5rem' }}>
                                <Link to="#" style={{
                                    color: 'black',
                                    textDecoration: 'none',
                                }}>Olvidé mi contraseña</Link>
                            </Typography>
                        </Box>
                        <FormControlLabel control={<Checkbox defaultChecked size='small' />} sx={{ width: 'fit-content' }} label="Recuérdame" />
                        <Box
                            sx={{
                                marginTop: '1rem',
                                display: 'flex',
                                flexDirection: 'column',
                                rowGap: '1.3rem',
                            }}
                        >
                            <Button
                                variant="contained"
                                sx={{
                                    width: '100%',
                                    backgroundColor: '#941B0C',
                                    padding: '0.3rem',
                                    color: 'white',
                                    '&:hover': {
                                        backgroundColor: '#941B0C',
                                    },
                                }}
                                type='submit'
                            >
                                <Typography variant='body2'>Iniciar sesión</Typography>
                            </Button>
                            <Button
                                variant="contained"
                                sx={{
                                    width: '100%',
                                    backgroundColor: 'white',
                                    padding: '0.3rem',
                                    color: 'black',
                                    '&:hover': {
                                        backgroundColor: 'white',
                                    },
                                }}
                            >
                                <Google sx={{ color: 'black' }} />
                                <Typography variant='body2' sx={{ color: 'black', marginLeft: '0.5rem' }}>Iniciar sesión con Google</Typography>
                            </Button>
                            <Button
                                variant="contained"
                                sx={{
                                    width: '100%',
                                    backgroundColor: 'black',
                                    padding: '0.3rem',
                                    color: 'white',
                                    '&:hover': {
                                        backgroundColor: 'black',
                                    },
                                }}
                            >
                                <Apple sx={{ color: 'white' }} />
                                <Typography variant='body2' sx={{ color: 'white', marginLeft: '0.5rem' }}>Iniciar sesión con Apple</Typography>
                            </Button>
                        </Box>
                        <Typography variant="body2" sx={{ color: 'black', textAlign: 'center', marginTop: '1.5rem' }}>
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
