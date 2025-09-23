import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

export const HeaderComponent = () => {
    const { pathname } = useLocation();
    const isTransparent = pathname === '/';

    return (
        <AppBar
            position="sticky"
            elevation={isTransparent ? 0 : 4}
            sx={{
                backgroundColor: isTransparent ? 'transparent' : '#fff',
                color: isTransparent ? 'white' : 'black',
                transition: 'background-color 0.3s ease',
            }}
            className={styles.color}
        >
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                {/* Title / Logo */}
                <Typography
                    variant="h6"
                    component={Link}
                    to="/"
                    sx={{
                        textDecoration: 'none',
                        color: 'inherit',
                        fontWeight: 'bold',
                    }}
                >
                    My Portfolio
                </Typography>

                {/* Navigation Links */}
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button
                        component={Link}
                        to="/Resume"
                        color="inherit"
                        className="header-links"
                    >
                        Resume
                    </Button>
                    <Button
                        component={Link}
                        to="/Projects"
                        color="inherit"
                        className="header-links"
                    >
                        Projects
                    </Button>
                    <Button
                        component={Link}
                        to="/Contact"
                        color="inherit"
                        className="header-links"
                    >
                        Contact
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};
