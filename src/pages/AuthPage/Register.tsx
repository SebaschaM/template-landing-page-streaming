import React, { useState } from 'react';
import { Box, Button, Card, Checkbox, Container, FormControl, FormControlLabel, IconButton, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { BackgroundImageStyle, Navbar } from '../../components';

const Register = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

    const onSubmit = (data: any) => {
        console.log(data);
        // Aquí deberías enviar los datos a tu backend para procesar el registro
        reset();
    };

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleTogglePasswordVisibilityConfirm = () => {
        setShowPasswordConfirm(!showPasswordConfirm);
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
                            Registro
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
                                    label="Nombre completo"
                                    variant="outlined"
                                    fullWidth
                                    type='text'
                                    size='small'
                                    InputLabelProps={{ style: { fontSize: '0.9rem' } }}
                                    inputProps={{ style: { fontSize: '0.9rem' } }}
                                    {...register('name', { required: true })}
                                />
                                {errors.name && <Typography color={'red'} variant='body2'>Este campo es requerido</Typography>}
                            </Box>
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
                            <Box sx={{ marginBottom: '1rem' }}>
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
                            <Box>
                                <TextField
                                    id="outlined-password"
                                    label="Confirma contraseña"
                                    size='small'
                                    variant="outlined"
                                    type={showPasswordConfirm ? 'text' : 'password'}
                                    fullWidth
                                    InputLabelProps={{ style: { fontSize: '0.9rem' } }}
                                    inputProps={{ style: { fontSize: '0.9rem' } }}
                                    InputProps={{
                                        endAdornment: (
                                            <IconButton
                                                onClick={handleTogglePasswordVisibilityConfirm}
                                                edge="end"
                                                aria-label="toggle password visibility"
                                            >
                                                {showPasswordConfirm ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        ),
                                    }}
                                    {...register('password', { required: true })}
                                />
                                {errors.password && <Typography color={'red'} variant='body2'>Este campo es requerido</Typography>}
                            </Box>
                        </Box>
                        <FormControlLabel
                            control={<Checkbox defaultChecked size='small' />}
                            sx={{
                                width: 'fit-content',
                                marginTop: '1rem',
                                '& .MuiTypography-root': {
                                    fontSize: '0.8rem' // Aquí puedes ajustar el tamaño del texto del label
                                }
                            }}
                            label="Acepto los términos y condiciones"
                        />
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
                                <Typography variant='body2'>Registrarse</Typography>
                            </Button>
                        </Box>
                        <Typography variant="body2" sx={{ color: 'black', textAlign: 'center', marginTop: '1.5rem' }}>
                            ¿Ya tienes una cuenta? <Link to="/login" style={{
                                color: 'black',
                                textDecoration: 'none',
                            }}>Iniciar sesión</Link>
                        </Typography>
                    </Card>
                </FormControl>
            </Container>
        </Box>
    );
};

export default Register;
