import React, { useState , useEffect } from 'react';
import { Container, Grid, Card, Box, Typography, TextField, Button, } from '@material-ui/core';
import { useDispatch } from "react-redux";
import { editPizza } from '../../store/actions/actionsDishes';
import axiosApi from '../../axiosApi';

const EditPizza = ({history , match}) => {
    const dispatch = useDispatch();

    const [addPizza, setAddPizza] = useState({
        pizza: '',
        price: '',
        img: '',
    });

    const onInputChange = e => {
        const { name, value } = e.target;

        setAddPizza(prev => ({
            ...prev,
            [name]: value
        }));
    };

    useEffect(() => {   
        const fetchContact = async () => {
            const response = await axiosApi.get('pizzaTypes/' + match.params.id + '.json');
            setAddPizza(response.data);
        }
        fetchContact().catch(console.error);
    }, [match.params.id]);

    const editPizzaType = async e => {
        e.preventDefault();

        try {
            await dispatch(editPizza(match.params.id ,{ ...addPizza }));
            history.push('/');
        } catch (e) {
            console.log('error happened');
        }
    };

    return (
        <Container maxWidth="lg">
            <Grid
                container
                justifyContent="center"
                alignItems="center"
            >
                <Card sx={{ display: 'flex', width: '100%', marginTop: '2rem' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginLeft: '40%' }}>
                        <Typography component="div" variant="h5" sx={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
                            Edit Pizza:
                        </Typography>
                            <Box component="div" variant="h6" mt={2}>
                                <TextField
                                    id="outlined-basic"
                                    label="Name"
                                    type="text"
                                    name='pizza'
                                    value={addPizza.pizza}
                                    onChange={onInputChange}
                                    variant="outlined" />
                            </Box>
                            <Box component="div" variant="h6" mt={2}>
                                <TextField
                                    id="outlined-basic"
                                    label="Price"
                                    type="text"
                                    name='price'
                                    value={addPizza.price}
                                    onChange={onInputChange}
                                    variant="outlined" />
                            </Box>
                            <Box component="div" variant="h6" mt={2}>
                                <TextField
                                    id="outlined-basic"
                                    label="Image"
                                    type="text"
                                    name='img'
                                    value={addPizza.img}
                                    onChange={onInputChange}
                                    variant="outlined" />
                            </Box>
                            <Button
                                variant="contained"
                                type='submit'
                                onClick={editPizzaType}
                            >
                                Save
                            </Button>
                    </Box>
                </Card>
            </Grid>
        </Container>
    )
}

export default EditPizza;
