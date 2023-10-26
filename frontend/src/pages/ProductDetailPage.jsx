import { Grid, Link, Paper, Typography, FormControl, InputLabel, Select, MenuItem, Box, Button, Divider } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import React, { useState } from 'react'
import CardOutLook from '../components/CardEdited/CardOutlook';
import CardBody from '../components/CardEdited/CardBody';
import CardHead from '../components/CardEdited/CardHead';
import { useParams } from 'react-router-dom';

function ProductDetailPage() {
    const [color, setColor] = useState('');
    const { productid } = useParams();
    const handleColor = (event) => {
        setColor(event.target.value);
    };
    return (
        <Grid container spacing={1}>
            <Grid item xs={12} md={12} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', marginLeft: 4 }}>
                <Link href="/home" underline='none'>
                    Home

                </Link>
                <KeyboardArrowRightIcon sx={{}} />
                <Link href="/home" underline='none'>
                    Sale Items
                </Link>


            </Grid>
            <Grid item xs={12} md={4}>
                <CardOutLook>
                    <CardBody>
                        <img style={{ display: 'flex', width: '80%', height: "100%", justifyContent: 'center', alignItems: 'center' }} src="https://fishingtackledirect.ie/wp-content/uploads/2020/02/Fishing-Rods.jpg" alt="Hình" />
                    </CardBody>
                </CardOutLook>
            </Grid>
            <Grid item xs={12} md={7}>
                <CardOutLook>
                    <CardHead>
                        FLASHABOU MINNOW BODY TUBING
                    </CardHead>
                    <CardBody>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography variant='h6'>
                                191.000đ
                            </Typography>
                            <Typography variant='h6'>
                                A fish-scale look from a Flashabou color braided over Pearl with a removable core.   Similar to Mylar Tube/cord
                            </Typography>
                            <Typography variant='h6'>
                                Small 1/8" diameter
                            </Typography>
                            <Typography variant='h6'>
                                Medium 1/4" diameter
                            </Typography>
                            <Typography variant='h6'>
                                Large 1/2" diameter
                            </Typography>
                            <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                                Color
                            </Typography>
                            <FormControl sx={{ width: "20%", marginBottom: 2 }} >
                                <InputLabel id="demo-simple-select-label">Color</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={color}
                                    label="Color"
                                    onChange={handleColor}
                                >
                                    <MenuItem value={'Yellow'}>Yellow</MenuItem>
                                    <MenuItem value={'Red'}>Red</MenuItem>
                                    <MenuItem value={'Blue'}>Blue</MenuItem>
                                </Select>
                            </FormControl>
                            <Button sx={{
                                backgroundColor: '#f44336', color: 'white', width: '100%', ":hover": {
                                    backgroundColor: "#f44336",
                                }
                            }}>
                                ADD TO CART
                            </Button>
                        </Box>

                    </CardBody>
                </CardOutLook>
                <Divider sx={{ marginLeft: 4 }} variant="string" />
                <Box sx={{ display: 'flex', flexDirection: 'row', marginLeft: 4, marginTop: 2 }}>
                    <Typography variant='body1' sx={{ fontWeight: 'bold' }}>
                        Share:
                    </Typography>
                    <TwitterIcon sx={{ marginRight: 2, marginLeft: 2 }} />
                    <InstagramIcon sx={{ marginRight: 2 }} />
                    <FacebookIcon />
                </Box>
            </Grid>
        </Grid>
    )
}

export default ProductDetailPage