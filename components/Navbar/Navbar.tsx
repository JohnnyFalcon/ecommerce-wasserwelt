"use client";
import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import styles from "./navbar.module.css";
import Image from "next/image";
import { FormControl, Input, InputAdornment, InputLabel } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Link from 'next/link';
const Navbar = () => {
    const drawerWidth = 240;
    const navItems = ['Home', 'About', 'Contact'];


    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                ser
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar className={styles.nav} component="nav">
                <Toolbar className={styles.toolbar}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' }, color: "black" }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div style={{ height: "80px", position: 'relative', width: "500px" }}>  <Image src="/images/logo3.png" fill style={{ objectFit: 'contain' }} alt="Picture of the author" priority={true} /></div>
                    <Box className={styles["nav-options"]} sx={{ mb: 1, display: { xs: 'none', sm: 'flex' } }}>
                        <FormControl variant="standard" sx={{ maxWidth: "160px", }}>
                            <InputLabel htmlFor="input-with-icon-adornment" sx={{ pl: 1 }}>
                                Znajdź produkt...
                            </InputLabel>
                            <Input
                                id="input-with-icon-adornment"
                                endAdornment={
                                    <InputAdornment position="end">
                                        <SearchIcon />
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <Box sx={{ display: 'flex', mt: 2, alignItems: 'center', ml: 7 }}>
                            <Link className={styles.link} href="/login">ZALOGUJ</Link>
                            {/* onClick={() => signOut()} */}

                            <ShoppingCartOutlinedIcon sx={{ color: '#0088cc', fontSize: 35, ml: 2 }} />
                        </Box>

                    </Box>

                </Toolbar>
            </AppBar>
            <nav>
                <Drawer

                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
            <Toolbar />
        </Box>
    );
}


export default Navbar