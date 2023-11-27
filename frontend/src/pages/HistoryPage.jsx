import React, { Fragment, useEffect, useState } from 'react'
import { getCookie } from '../utils/CookieFunction'
import axios from 'axios';
import { CircularProgress, Container, Grid, Paper, Typography, Box, Divider } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import { jwtDecode } from 'jwt-decode';
function HistoryPage() {
    const [listHistory, setListHistory] = useState([])
    // const orderhistory = JSON.parse(getCookie('orderDetails'));
    // console.log('orderhistory', orderhistory);
    // console.log(typeof (orderhistory))
    // list the id
    // let listID = orderhistory.map((order) => order.id)
    // console.log(typeof (listID));
    // console.log(listID)
    // convert object to array
    // let convertlistorder = Object.values(listID)
    // console.log(convertlistorder.join(';'));
    // console.log('convert', Object.values(listID))
    useEffect(() => {
        async function getOrderHistory() {
            try {
                const token = window.sessionStorage.getItem('authToken')
                const user = jwtDecode(token)
                const response = await axios.get(`https://fish-demo.onrender.com/purchase/returnItem/${user.user_id}`)
                console.log(response.data);
                setListHistory(response.data);
            } catch (error) {
                console.log(error)
            }
        }
        getOrderHistory()
    }, [])
    return (
        <>
            {listHistory.length > 0 ? (
                <>
                    <Container>
                        <Grid container spacing={0} sx={{ p: 4 }} >
                            <Grid item xs={12} md={8}>
                                {listHistory.map((buy) => (
                                    <Box key={buy._id} >
                                        {buy.cart.map((item) => (
                                            <Paper
                                                key={item.id}
                                                sx={{ display: 'flex', flexDirection: 'row', marginBottom: 3, boxShadow: 5 }}
                                            >
                                                <Box>
                                                    <img
                                                        style={{ margin: 0, height: '150px' }}
                                                        src={item.image}
                                                        alt="product-image"
                                                        className="w-full rounded-lg sm:w-40"
                                                    />
                                                </Box>
                                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>

                                                    <Box sx={{ m: 1 }}>
                                                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                                            {item.ten_hang}
                                                        </Typography >
                                                    </Box>
                                                    <Box sx={{ m: 1 }}>
                                                        <Typography variant="h6">
                                                            Quantity: {item.so_luong}
                                                        </Typography>
                                                    </Box>
                                                    <Box sx={{ m: 1 }}>
                                                        <Typography variant="h6">
                                                            {(item.price * item.so_luong).toFixed(2)} $
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            </Paper>
                                        ))}

                                    </Box>
                                ))}
                            </Grid>
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