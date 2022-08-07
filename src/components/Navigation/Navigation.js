import * as React from 'react';
import {AppBar, Box, Toolbar, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        Pizzeria
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1}} className='nav'>
                        <NavLink to='/' exact activeStyle={{ color: '#c6cacc' }}>Dishes</NavLink>
                        <NavLink to='/orders' activeStyle={{ color: '#c6cacc' }}>Orders</NavLink>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navigation;
