import React, { useEffect } from 'react';
import { Container, Grid, Box, Card, CardContent, Typography, Button} from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";
import { fetchOrder, deleteOrder } from '../../store/actions/actionsOrders';

const Orders = () => {
    const dispatch = useDispatch();

    const allOrders = useSelector(state => state.orders.orders);

    useEffect(() => {
        dispatch(fetchOrder());
    }, [dispatch]);
    console.log(allOrders);

    const delOrder = async (id) => {
        try {
            await dispatch(deleteOrder(id));
        } catch (e) {
            console.log('error happened');
        }
    };  

    return (
        <Container maxWidth="lg">
            <Grid
                container
                direction="row"
                justifyContent="space-between"
            >
                {allOrders.map((order) => (
                    <>
                        <Card sx={{ display: 'flex', width: '50%', margin: '1rem' }} className='cards' key={order.id}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minWidth: '200px' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h5" sx={{margin: '200px'}}>
                                        <img src={order.img} alt=""/>
                                    </Typography>
                                    <Typography component="div" variant="h5">
                                        {order.pizza}
                                    </Typography>
                                    <Typography component="div" variant="h6">
                                        {order.price} KGS
                                    </Typography>
                                </CardContent>
                                <Button variant="contained" sx={{ marginTop: '1rem' }} onClick={() => delOrder(order.id)}>
                                    Delete
                                </Button>
                            </Box>
                        </Card>
                    </>
                ))}
            </Grid>
        </Container>
    )
}

export default Orders;
