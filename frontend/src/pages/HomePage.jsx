// import React from 'react';
// import Footer from "../components/footer/Footer";
// import TestNav from "../components/NavBar/TestNav";
import { Fragment } from "react";
// import BG from "../assets/img/fish.webp";
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
import React, { useState, useEffect } from 'react'
// import AppPagination from '../components/Pagnigation/AppPagination'
import { useNavigate } from "react-router-dom";
import { products } from "../data/products";
import { products1 } from "../data/products1";
import axios from 'axios'
const HomePage = () => {
    const [filter, setFilter] = useState('');
    const [sort, setSort] = useState('');
    const [product, setProduct] = useState([]);
    const navigate = useNavigate();
    const handleView = (id) => {
        console.log('idinlist', id);
        navigate(`/products/${id}`)
    }
    useEffect(() => {
        async function getProduct() {
            try {
                const response = await axios.get('https://fish-staging.onrender.com/query/item/all')
                setProduct(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        getProduct()
    }, [])
    let newProduct = product.slice(0, 4)
    let newProduct1 = products1.slice(0, 4)
    console.log(newProduct);
    console.log('product', products)
    console.log('product1', products1[0])
    return (
        <>
            {product.length > 0 ? (
                <Fragment>
                    {/* <TestNav /> */}
                    {/* {!props.isLoading && <Dishes />}
            {props.isLoading && <LoadingSpinner />} */}
                    <div style={{ backgroundImage: "url('src/assets/img/fishWall.jpg')", backgroundRepeat: "no-repeat ", backgroundSize: "100% 800px" }} className="w-full h-[800px] text-center text-white font-bold">
                        <h1 className='pt-10 text-[60px]'>ANGLER VIETNAM</h1>
                        <p>NHÃN HÀNG YÊU THÍCH CỦA BẠN TRONG CỬA HÀNG CỦA CHÚNG TÔI</p>
                    </div>
                    <div className="pt-10 w-full h-[800px] text-center text-black">
                        <h1 className='text-[30px] font-bold'>SẢN PHẨM MỚI</h1>
                        <hr className="w-48 h-1 mx-auto my-4 bg-black border-0 rounded md:my-10 dark:bg-gray-700"></hr >
                        <Container>

                            <Grid
                                container
                                spacing={{ xs: 2, md: 4 }}
                                sx={{ justifyContent: "center", alignItems: "center" }}
                                columns={{ xs: 2, sm: 4, md: 6 }}
                            >
                                {newProduct.map((product) => (
                                    <Grid item key={product.id} xs={2} sm={2} md={1.5} sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", margin: 0 }}>
                                        <Box sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            flexDirection: "column",
                                            position: "relative",
                                            width: '90%'
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
                                                        Xem
                                                    </Button>

                                                </CardActions>
                                            </Card>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                            {/* <AppPagination setProducts={(p) => setProducts(p)} /> */}

                        </Container>
                    </div>
                    <div style={{ backgroundImage: "url('src/assets/img/fishWall1.jpg')", backgroundRepeat: "no-repeat ", backgroundSize: "100% 800px" }} className=" w-full h-[800px] text-center text-white font-bold">
                        <div className='h-[25px] pt-25'></div>
                        <h1 className='text-[60px]'>BỘ SƯU TẬP CẦN CÂU CỦA CHÚNG TÔI</h1>
                    </div>
                    <div className="pt-10 w-full h-[800px] text-center text-black">
                        <h1 className='text-[30px] font-bold'>CÁC HÃNG HÀNG ĐẦU</h1>
                        <hr className="w-48 h-1 mx-auto my-4 bg-black border-0 rounded md:my-10 dark:bg-gray-700"></hr >
                        <Container>

                            <Grid
                                container
                                spacing={{ xs: 2, md: 4 }}
                                sx={{ justifyContent: "center", alignItems: "center" }}
                                columns={{ xs: 2, sm: 4, md: 6 }}
                            >
                                {newProduct1.map((product) => (
                                    <Grid item key={product.id} xs={2} sm={2} md={1.5} sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", margin: 0 }}>
                                        <Box sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            flexDirection: "column",
                                            position: "relative"
                                        }}>
                                            <Card >
                                                <CardMedia
                                                    component="img"
                                                    height="194"
                                                    width="80%"
                                                    image={product.image}
                                                />
                                            </Card>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                            {/* <AppPagination setProducts={(p) => setProducts(p)} /> */}

                        </Container>
                    </div>
                    <div style={{ backgroundImage: "url('src/assets/img/fishWall3.jpg')", backgroundRepeat: "no-repeat ", backgroundSize: "100% 800px" }} className="w-full h-[800px] text-center text-white font-bold">
                        <h1 className='pt-10 text-[60px]'>ANGLER VIETNAM</h1>
                        <p>NHÃN HÀNG YÊU THÍCH CỦA BẠN TRONG CỬA HÀNG CỦA CHÚNG TÔI</p>
                    </div>
                    {/* <Footer /> */}
                </Fragment >
            ) : (
                <Box sx={{ minHeight: "100%", display: "flex", justifyContent: "center", alignItems: "center", p: 2 }}>
                    <CircularProgress color="inherit" />
                </Box>
            )}
        </>
    );
};



export default HomePage;
