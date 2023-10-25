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
let products1 = [
    {
        id: 1,
        name: "Super Backpack",
        price: 129.99,
        description: "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna",
        image: "https://fishingtackledirect.ie/wp-content/uploads/2020/02/Fishing-Rods.jpg"
    }
]
function ListProductPage() {
    const [filter, setFilter] = useState('');

    const handleFilter = (event) => {
        setFilter(event.target.value);
    };
    const [sort, setSort] = useState('');

    const handleSort = (event) => {
        setSort(event.target.value);
    };
    const [products, setProducts] = useState([])
    console.log('product', products)
    console.log('product1', products1[0])
    return (
        <Container>

            <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                sx={{ justifyContent: "center", alignItems: "center" }}
                columns={{ xs: 4, sm: 8, md: 12 }}
            >
                <Grid item xs={12} md={12} sx={{ display: 'flex', flexDirection: 'row',justifyContent: 'flex-end', paddingRight: 10 }} >
                    
                        <Typography variant='h6' sx={{ fontWeight: 'bold', m: 2 }} >
                            Filtered by
                        </Typography>
                        <FormControl  sx={{ width: "20%", marginRight: 5 }} >
                            <InputLabel id="demo-simple-select-label">All of the Items</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={filter}
                                label="Filter"
                                onChange={handleFilter}
                            >
                                <MenuItem value={'All'}>All</MenuItem>
                                <MenuItem value={'1'}>1</MenuItem>
                                <MenuItem value={'2'}>2</MenuItem>
                            </Select>
                        </FormControl>
                    
                    
                        <Typography variant='h6' sx={{ fontWeight: 'bold', m: 2 }} >
                            Sorted by
                        </Typography>
                        <FormControl sx={{ width: "20%" }} >
                            <InputLabel id="demo-simple-select-label">Best Seller</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={filter}
                                label="Filter"
                                onChange={handleFilter}
                            >
                                <MenuItem value={'Best Seller'}>Best Seller</MenuItem>
                                <MenuItem value={'From Lowest to Highest'}>From Lowest to Highest</MenuItem>
                                <MenuItem value={'From Highest to Lowest'}>From Lowest to Highest</MenuItem>
                            </Select>
                        </FormControl>
                    
                </Grid>
                {products.map((product) => (
                    <Grid item key={product.id} xs={2} sm={4} md={4} sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", margin: 0 }}>
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
                                    <Button>
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
    )
}

export default ListProductPage