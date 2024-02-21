"use client";

import React, { useEffect, useState, useRef } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from "next/link";
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import styles from "./page.module.css";
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';


export default function Login() {

    const [showPassword, setShowPassword] = useState(false);
    const [showCPassword, setShowCPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [validationError, setValidationError] = useState('');
    const [authState, setAuthState] = useState({
        name: '',
        email: '',
        password: '',

    });
    const formRef = useRef<HTMLFormElement>(null);

    const validatePassword = (password: string) => {
        setPassword(password);
        if (password.length < 9) {
            setPasswordError('Minimalna długość hasła wynosi 8 znaków.');
        } else {
            setPasswordError('');
        }
    };


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setValidationError('Podane hasła muszą być identyczne.');
            return;
        }
        // Reset validation error if criteria are met
        setValidationError('');
        const formData = new FormData(event.currentTarget)
        const nameValue = formData.get('name')
        const emailValue = formData.get('email')
        const passwordValue = formData.get('password')
        console.log(nameValue, emailValue, passwordValue)
        setPassword('');
        setConfirmPassword('');
        if (formRef.current) {
            formRef.current.reset();
        }

    };
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowCPassword = () => setShowCPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <Container component="main" maxWidth="xs" >
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >

                <div style={{ height: "70px", position: 'relative', width: "70px" }}>  <Image src="/images/logo-fish.png" fill style={{ objectFit: 'contain' }} alt="Picture of the author" priority={true} /></div>
                <Typography component="h1" variant="h4" sx={{ textAlign: "center" }}>
                    Załóż konto
                </Typography>
                <Typography variant='body1' sx={{ mt: 1 }}>Masz już konto? <Link style={{ fontWeight: 'bold' }} className={styles.link} href="/login">Zaloguj się</Link></Typography>

                <Box component="form" ref={formRef} onSubmit={handleSubmit}
                    sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Imię"
                        name="name"
                        autoComplete="name"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="E-mail"
                        name="email"
                        autoComplete="email"

                    />
                    <FormControl fullWidth variant="outlined" sx={{ mb: 1, mt: 2 }}>
                        <InputLabel htmlFor="outlined-adornment-password">Hasło *</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            required
                            name='password'
                            inputProps={{
                                minLength: 8
                            }}
                            onChange={(e) => validatePassword(e.target.value)}
                            value={password}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Hasło:*"
                        />
                    </FormControl>
                    <Typography variant='body2' sx={{ color: 'red' }}>{passwordError}</Typography>
                    <FormControl fullWidth variant="outlined" sx={{ mb: 1, mt: 2 }}>
                        <InputLabel htmlFor="outlined-adornment-password-confirm">Potwierdź Hasło *</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password-confirm"
                            type={showCPassword ? 'text' : 'password'}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            value={confirmPassword}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowCPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Potwierdź Hasło:*"
                        />
                    </FormControl>
                    <Typography variant='body2' sx={{ color: 'red' }}>{validationError}</Typography>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 2, mb: 2 }}
                    >
                        załóż konto
                    </Button>

                </Box>
            </Box>

        </Container>)

}