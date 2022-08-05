import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Grid, Box, Card, CardContent, CardMedia, Typography, Button} from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";
import { fetchPizza , deletePizza } from '../../store/actions/actionsDishes';

const Dishes = ({history}) => {
    const dispatch = useDispatch();

    const allPizza = useSelector(state => state.dishList.pizza);

    useEffect(() => {
        dispatch(fetchPizza());
    }, [dispatch]);

    const delPizza = async (id) => {
        try {
            await dispatch(deletePizza(id));
            history.push('/');
        } catch (e) {
            console.log('error happened');
        }
    };

    return (
        <Container maxWidth="lg">
            <NavLink to={'/add-dishes'}>
                <Button
                    variant="contained"
                    type='button'
                    sx={{ float: 'right', margin: '1rem' }}
                >
                    Add new Pizza
                </Button>
            </NavLink>
            <Grid
                container
                direction="row"
                justifyContent="space-between"
            >
                {allPizza.map( pizza => (
                    <>
                        <Card sx={{ display: 'flex', width: '50%', margin: '1rem' }} className='cards' key={pizza.id}>
                            <CardMedia
                                component="img"
                                sx={{ width: 150 }}
                                image={pizza.img}
                                alt={pizza.price}
                            />
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minWidth: '200px' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h5">
                                        {pizza.pizza}
                                    </Typography>
                                    <Typography component="div" variant="h6">
                                        {pizza.price} KGS
                                    </Typography>
                                </CardContent>
                            </Box>
                                <NavLink to={'/' + pizza.id + '/edit'}>
                                    <Button variant="contained">
                                        Edit
                                    </Button>
                                </NavLink>
                                <Button variant="contained" sx={{ marginTop: '1rem' }} onClick={() => delPizza(pizza.id)}>
                                    Delete
                                </Button>
                        </Card>
                    </>
                ))}
            </Grid>
        </Container>
    )
}

export default Dishes;
