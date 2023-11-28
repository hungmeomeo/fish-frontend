import { Grid, Typography, Box, Card, CardMedia, CardContent, CardActions, Container, Button, Divider } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import AppPagination from '../components/Pagnigation/AppPagination';


function SearchPage() {
    const [productSearch, setProductSearch] = useState([]);
    const { searchid } = useParams();
    const location = useLocation();
    console.log('location', location.state)
    const searchResutl = location.state.data
    const handleView = (id) => {
        console.log('idinlist', id);
        navigate(`/products/${id}`)
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography variant='h3'>
                        Search
                    </Typography>

                </Grid>

                {searchResutl.length > 0 ? (
                    <>
                        {searchResutl.map((product) => (
                            <Grid item key={product.id} xs={2} sm={4} md={3} sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", margin: 0 }}>
                                <Box sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    flexDirection: "column",
                                    position: "relative",
                                    width: "90%"
                                }}>
                                    <Card >
                                        <CardMedia
                                            component="img"
                                            sx={{
                                                height: '300px',
                                            }}
                                            image={product.image}
                                        />
                                        <CardContent>
                                            <Box sx={{ display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: "center" }}>
                                                <Typography variant="body2" >
                                                    {product.name}
                                                </Typography>
                                                <Typography variant='body2' >
                                                    {product.price}
                                                </Typography>
                                            </Box>
                                        </CardContent>
                                        <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}   >
                                            <Button variant='contained' onClick={() => handleView(product.id)}>
                                                View
                                            </Button>

                                        </CardActions>
                                    </Card>
                                </Box>
                            </Grid>
                        ))}
                    </>
                ) : (
                    <>
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Typography variant='h6' >
                                Can't find any information
                            </Typography>
                        </Grid>
                    </>
                )}
            </Grid>
            {searchResutl.length > 0 ? (
                <AppPagination setProduct={setProductSearch} data={searchResutl} />
            ) : (
                null
            )}



        </Container>
    )
}

export default SearchPage