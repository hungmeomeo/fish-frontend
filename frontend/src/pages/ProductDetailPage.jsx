import { Grid, Link, Paper, Typography, FormControl, InputLabel, Select, MenuItem, Box, Button, Divider, ImageList, ImageListItem, CircularProgress } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import React, { useEffect, useState } from 'react'
import CardOutLook from '../components/CardEdited/CardOutlook';
import CardBody from '../components/CardEdited/CardBody';
import CardHead from '../components/CardEdited/CardHead';
import { useParams } from 'react-router-dom';
import AddToCartButton from '../components/AddToCartButton';
import axios from 'axios';
import MissingPage from './MissingPage';
import { faCommentsDollar } from '@fortawesome/free-solid-svg-icons';
let listimage = [
    {
        url: 'https://fishingtackledirect.ie/wp-content/uploads/2020/02/Fishing-Rods.jpg'
    },
    {
        url: 'https://media.istockphoto.com/id/1319005994/vector/fishing-rod-with-spinning-reel-isolated-on-white.jpg?s=612x612&w=0&k=20&c=471s_j50X_luTc5kxIu5t7fAq7q2s1_IW0guPye8hMU='
    },
    {
        url: 'https://media.istockphoto.com/id/1335786676/vector/fishing-rod-icon-on-white-background-fishing-rod-with-reel-sign-fishing-rod-camping-symbol.jpg?s=170667a&w=0&k=20&c=LRu9ITsi1soHfATu-3u3E15ParCas6BRIUtOSaworwo='
    }
]
function ProductDetailPage() {
    const [color, setColor] = useState('');
    const [productDetail, setProductDetail] = useState([]);
    //const [mainImage, setMainImage] = useState();
    const [error, setError] = useState(false);
    let { categoryid, productid } = useParams();
    console.log('halo', window.location.href);
    console.log('productindetail', productid);
    console.log('cateindetail', categoryid);
    const handleColor = (event) => {
        setColor(event.target.value);
    };
    useEffect(() => {
        async function getProductList() {
            try {
                const response = await axios.get(`https://fish-staging.onrender.com/query/item/${productid}`)
                setProductDetail(response.data)
                console.log(response.data)
                console.log('hello')
            } catch (error) {
                setError(true)
            }
        }
        getProductList()
    }, [])
    let mainImage = productDetail.length > 0 ? productDetail[0].image : '';
    // if (productDetail.length > 0) {
    //     setMainImage(productDetail[0].image)
    // }

    return (
        error === false ? (
            <>
                {productDetail.length > 0 ? (
                    <>
                        <Grid container spacing={1}>
                            <Grid item xs={12} md={12} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', marginLeft: 4 }}>
                                <Link href="/home" underline='none'>
                                    Home
                                </Link>
                                <KeyboardArrowRightIcon sx={{}} />
                                <Link href={`/products/${categoryid}`} underline='none'>
                                    {categoryid.charAt(0).toUpperCase() + categoryid.slice(1)}
                                </Link>
                            </Grid>
                            <Grid item xs={12} md={5}>
                                <CardOutLook>
                                    <CardBody>
                                        <img style={{ display: 'flex', width: '80%', height: "90%", justifyContent: 'center', alignItems: 'center' }} src={mainImage} alt="Hình" />
                                    </CardBody>
                                    {/* <ImageList sx={{ marginLeft: 10, width: '40%', height: '30%', cursor: 'pointer' }} cols={3} rowHeight={100} >
                            {listimage.map((item) => (
                                <ImageListItem key={item.url} >
                                    <img src={item.url} onClick={() => setMainImage(item.url)} />
                                </ImageListItem>
                            ))}
                        </ImageList> */}
                                </CardOutLook>

                            </Grid>
                            <Grid item xs={12} md={6}>
                                <CardOutLook>
                                    <CardHead>
                                        {productDetail[0].name}
                                    </CardHead>
                                    <CardBody>
                                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                            <Typography variant='h6'>
                                                {productDetail[0].price}$
                                            </Typography>
                                            <Typography variant='h6'>
                                                {productDetail[0].description}
                                            </Typography>

                                            {/* <Button sx={{
                                backgroundColor: '#f44336', color: 'white', width: '100%', ":hover": {
                                    backgroundColor: "#f44336",
                                }
                            }}>
                                ADD TO CART
                            </Button> */}
                                            <AddToCartButton productid={productid} />
                                        </Box>

                                    </CardBody>
                                    <Divider sx={{ marginLeft: 4 }} variant="string" />
                                    <Box sx={{ display: 'flex', flexDirection: 'row', marginLeft: 4, marginTop: 2, marginBottom: 2 }}>
                                        <Typography variant='body1' sx={{ fontWeight: 'bold' }}>
                                            Share:
                                        </Typography>
                                        <TwitterIcon sx={{ marginRight: 2, marginLeft: 2 }} />
                                        <InstagramIcon sx={{ marginRight: 2 }} />
                                        <FacebookIcon />
                                    </Box>
                                </CardOutLook>


                            </Grid>

                        </Grid>
                    </>
                ) : (
                    <>
                        <Box sx={{ minHeight: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <CircularProgress color="inherit" />
                        </Box>
                    </>

                )}

            </>
        ) : (
            <MissingPage />
        )

    )
}

export default ProductDetailPage