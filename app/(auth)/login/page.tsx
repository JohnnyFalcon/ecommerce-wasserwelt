"use client";

import React, { useEffect, useState } from 'react';
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

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget)
        const username = formData.get('email')
        const password = formData.get('password')

        const response = await signIn("credentials", {
            username: username,
            password: password,
            redirect: false
        })

    };
    const handleClickShowPassword = () => setShowPassword((show) => !show);

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
                    Zaloguj się
                </Typography>
                <Typography variant='body1' sx={{ mt: 1 }}>Nie masz konta? <Link style={{ fontWeight: 'bold' }} className={styles.link} href="/register">Załóż konto</Link></Typography>
                <Box component="form" onSubmit={handleSubmit}
                    sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="E-mail"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <FormControl fullWidth variant="outlined" sx={{ mb: 1, mt: 2 }}>
                        <InputLabel htmlFor="outlined-adornment-password">Hasło *</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
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
                            label="Hasło*"
                        />
                    </FormControl>
                    <div style={{ width: "100%", display: 'flex', justifyContent: 'end' }}><Link style={{ textDecoration: 'underline', fontSize: "0.9rem" }} className={styles.link} href="/#">Nie pamiętasz hasła?</Link></div>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 2, mb: 2 }}
                    >
                        Zaloguj się
                    </Button>

                </Box>
            </Box>

        </Container>)

}