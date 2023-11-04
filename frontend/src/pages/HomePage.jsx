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
    Select
} from '@mui/material'
import React, { useState } from 'react'
import AppPagination from '../components/Pagnigation/AppPagination'
import { useNavigate } from "react-router-dom";
let products1 = [
    {
        id: 1,
        name: "Super Backpack",
        price: 129.99,
        description: "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna",
        image: "https://fishingtackledirect.ie/wp-content/uploads/2020/02/Fishing-Rods.jpg"
    }
]
const HomePage = () => {
    const [filter, setFilter] = useState('');
    const [sort, setSort] = useState('');
    const [products, setProducts] = useState([])
    const navigate = useNavigate();
    const handleFilter = (event) => {
        setFilter(event.target.value);
    };


    const handleSort = (event) => {
        setSort(event.target.value);
    };
    const handleView = (id) => {
        console.log('idinlist', id);
        navigate(`/products/${id}`)
    }

    console.log('product', products)
    console.log('product1', products1[0])
    return (
        <Fragment>
            {/* <TestNav /> */}
            {/* {!props.isLoading && <Dishes />}
            {props.isLoading && <LoadingSpinner />} */}
            <div style={{ backgroundImage: "url('src/assets/img/fishWall.jpg')", backgroundRepeat: "no-repeat ", backgroundSize: "100% 800px" }} className="w-full h-[800px] text-center text-white font-bold">
                <h1 className='pt-10 text-[60px]'>ANGLER VIETNAM</h1>
                <p>YOUR FAVOURITE BRANDS IN ONE STORE</p>
            </div>
            <div className="pt-10 w-full h-[800px] text-center text-black">
                <h1 className='text-[30px] font-bold'>WHAT S NEW???</h1>
                <hr className="w-48 h-1 mx-auto my-4 bg-black border-0 rounded md:my-10 dark:bg-gray-700"></hr >
                <Container>

                    <Grid
                        container
                        spacing={{ xs: 2, md: 3 }}
                        sx={{ justifyContent: "center", alignItems: "center" }}
                        columns={{ xs: 2, sm: 4, md: 6 }}
                    >
                        {products.map((product) => (
                            <Grid item key={product.id} xs={2} sm={2} md={1} sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", margin: 0 }}>
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
                    </Grid>
                    <AppPagination setProducts={(p) => setProducts(p)} />

                </Container>
            </div>
            <div style={{ backgroundImage: "url('src/assets/img/fishWall1.jpg')", backgroundRepeat: "no-repeat ", backgroundSize: "100% 800px" }} className=" w-full h-[800px] text-center text-white font-bold">
                <div className='h-[25px] pt-25'></div>
                <h1 className='text-[60px]'>SHOP OUR REEL COLLECTION</h1>
            </div>
            <div className="pt-10 w-full h-[800px] text-center text-black">
                <h1 className='text-[30px] font-bold'>TOP BRAND</h1>
                <hr className="w-48 h-1 mx-auto my-4 bg-black border-0 rounded md:my-10 dark:bg-gray-700"></hr >
            </div>
            <div style={{ backgroundImage: "url('src/assets/img/fishWall3.jpg')", backgroundRepeat: "no-repeat ", backgroundSize: "100% 800px" }} className="w-full h-[800px] text-center text-white font-bold">
                <h1 className='pt-10 text-[60px]'>ANGLER VIETNAM</h1>
                <p>YOUR FAVOURITE BRANDS IN ONE STORE</p>
            </div>
            {/* <Footer /> */}
        </Fragment >
    );
};



export default HomePage;
