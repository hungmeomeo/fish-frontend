import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Paper,
    Box,
    Typography,
    Button,
    Stack,
    List,
    ListItem,
    ListItemText,
    Container,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
    CircularProgress
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import AppPagination from '../components/Pagnigation/AppPagination'
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios'
import MissingPage from './MissingPage';
function ListProductPage() {
    const [filter, setFilter] = useState('');
    const [sort, setSort] = useState('');
    const [productList, setProductList] = useState([]);
    const [error, setError] = useState(false);
    let { categoryid } = useParams();
    console.log('cate', categoryid);
    const navigate = useNavigate();
    const handleFilter = (event) => {
        setFilter(event.target.value);
    };
    useEffect(() => {
        async function getProductList() {
            try {
                const response = await axios.get(`https://fish-staging.onrender.com/query/products/${categoryid}`)
                setProductList(response.data)
                console.log('hello')
            } catch (error) {
                setError(true)
            }
        }
        getProductList()
    }, [])
    console.log('product', productList);
    const handleSort = (event) => {
        setSort(event.target.value);
    };
    const handleView = (id) => {
        console.log('idinlist', id);
        navigate(`/products/${categoryid}/${id}`)
    }
    return (
        error === false ? (

            <>
                {productList.length > 0 ? (
                    <Container>

                        <Grid
                            container
                            spacing={{ xs: 2, md: 3 }}

                            columns={{ xs: 4, sm: 8, md: 12 }}
                        >
                            <Grid item xs={12} md={12} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', paddingRight: 10 }} >
                            </Grid>
                            {productList.map((product) => (
                                <Grid item key={product.id} xs={2} sm={4} md={3} sx={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", margin: 0 }}>
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
                                                    <Typography variant="body2" sx={{ fontWeight: 'bold' }} >
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
                        </Grid>
                        <AppPagination setProduct={setProductList} data={productList} />

                    </Container>
                ) : (
                    <>
                        <Box sx={{ minHeight: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <CircularProgress color="inherit" />
                        </Box>

                    </>
                )}

            </>
        ) : (
            <>
                <MissingPage />
            </>
        )

    )
}

export default ListProductPage