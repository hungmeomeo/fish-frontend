import React, { useEffect, useState } from 'react'
import { getCookie } from '../utils/CookieFunction'
import axios from 'axios';
import { CircularProgress, Container, Grid, Paper, Typography, Box, Divider } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';

function HistoryPage() {
    const [listOrder, setListOrder] = useState([])
    const orderhistory = JSON.parse(getCookie('orderDetails'));
    console.log('orderhistory', orderhistory);
    console.log(typeof (orderhistory))
    // list the id
    let listID = orderhistory.map((order) => order.id)
    console.log(typeof (listID));
    console.log(listID)
    // convert object to array
    let convertlistorder = Object.values(listID)
    console.log(convertlistorder.join(';'));
    console.log('convert', Object.values(listID))
    useEffect(() => {
        async function getOrderHistory() {
            try {
                const response = await axios.get(`https://fish-staging.onrender.com/query/item/${convertlistorder.join(';')}`)
                console.log(response.data);
                let full_list = [];
                for (let i = 0; i < orderhistory.length; i++) {
                    full_list.push({ ...orderhistory[i], ...response.data[i] })
                }
                console.log('list', full_list)
                setListOrder(full_list);
            } catch (error) {
                console.log(error)
            }
        }
        getOrderHistory()
    }, [])
    return (
        <>
            {listOrder.length > 0 ? (
                <>
                    <Container>
                        <Grid container spacing={0} >
                            {listOrder.map((product) => (
                                <React.Fragment key={product.id} >

                                    <Box sx={{ display: 'flex', flexDirection: 'column', boxShadow: 4, width: '80%', m: 1 }} >
                                        <Box sx = {{width: '98%'}}>
                                            <Grid item xs={12} md={12} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                                                <Typography variant='subtitle1' >
                                                    <DoneIcon color='success' /> Paid
                                                </Typography>
                                            </Grid>
                                        </Box>
                                        <Divider sx={{ marginY: 1, marginX: 1, width: '98%' }} />
                                        <Box sx = {{display: 'flex', flexDirection: 'row'}}>
                                            <Grid item xs={2} md={1.8} m={1}>
                                                <img
                                                    style={{ width: '110px', height: '110px' }}
                                                    src={product.image}
                                                    alt="product-image"
                                                />
                                            </Grid>
                                            <Grid item xs={10} md={9} sx={{ display: 'flex', flexDirection: 'column', m: 1 }}>
                                                <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                                                    {product.name}
                                                </Typography>
                                                <Typography variant='subtitle1' sx={{ color: 'grey' }}>
                                                    {product.cato.charAt(0).toUpperCase() + product.cato.slice(1)}
                                                </Typography>
                                                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                                    <Typography variant='subtitle1'>
                                                        x{product.quantity}
                                                    </Typography>

                                                    <Typography variant='subtitle1' sx={{ marginLeft: 20, color: '#f84434' }}  >
                                                        {product.quantity * product.price}$
                                                    </Typography>

                                                </Box>
                                            </Grid>
                                        </Box>
                                    </Box>

                                </React.Fragment>
                            ))}
                        </Grid>
                    </Container>
                </>
            ) : (
                <>
                    <Box sx={{ minHeight: "100%", display: "flex", justifyContent: "center", alignItems: "center", p: 2 }}>
                        <CircularProgress color="inherit" />
                    </Box>
                </>
            )}
        </>

    )
}

export default HistoryPage