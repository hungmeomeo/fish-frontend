import { Fragment, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import LOGO from "../../assets/img/footerIcon.svg"
import { Grid, TextField, Divider, Button, Box, Paper, Typography } from "@mui/material";
import { LoadingButton } from '@mui/lab';
import axios from "axios";
import { jwtDecode } from 'jwt-decode';
import { deleteCookie } from "../../utils/CookieFunction";


const Checkout = () => {
  const [name, setName] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [cardNumber, setCardNumber] = useState('');
  const [date, setDate] = useState('')
  const [cvvNumber, setCvvNumber] = useState('')
  const [nameCard, setNameCard] = useState('')
  const [validName, setValidName] = useState(true)
  const [validPhone, setValidPhone] = useState(true)
  const [validAddress, setValidAddress] = useState(true)
  const [validCard, setValidCard] = useState(true)
  const [validDate, setValidDate] = useState(true)
  const [validCvv, setValidCvv] = useState(true)
  const [validNameCard, setValidNameCard] = useState(true)
  const [payClick, setPayClick] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  // const cart = useSelector(state => state.cart);
  const cart = JSON.parse(window.sessionStorage.getItem('cart'))
  console.log('cart', cart)
  // const data = location.state.data;
  // const quantity = location.state.quantity;
  // console.log('hello', location.state.data);
  const handleName = (event) => {
    setName(event.target.value)
  }
  const handlePhone = (event) => {
    setPhone(event.target.value)
  }
  const handleAddress = (event) => {
    setAddress(event.target.value)
  }
  const handleCardNumber = (event) => {
    setCardNumber(event.target.value)
  }
  const handleDate = (event) => {
    setDate(event.target.value)
  }
  const handleCvvNumber = (event) => {
    setCvvNumber(event.target.value)
  }
  const handleNameCard = (event) => {
    setNameCard(event.target.value)
  }
  let totalBill = 0;
  for (let i = 0; i < cart.length; i++) {
    totalBill += cart[i].price * cart[i].so_luong
  }

  console.log('testredux', cart);
  console.log('total', totalBill)
  const handleSubmit = (e) => {

    e.preventDefault();
    console.log('startsubmit')
    
      if (!validName && (name === "")) {
        setValidName(false)
      }
      if (!validPhone && (phone === "")) {
        setValidPhone(false)
      }
      if (!validAddress && (address === "")) {
        setValidAddress(false)
      }
      if (!validCard && (cardNumber === "")) {
        setValidCard(false)
      }
      if (!validDate && (date === "")) {
        setValidDate(false)
      }
      if (!validCvv && (cvvNumber === "")) {
        setValidCvv(false)
      }
      if (!validNameCard && (nameCard === "")) {
        setValidNameCard(false)
      }
      if (validName && name !== "" && validPhone && phone !== "" && validAddress && address !== ""
        && validCard && cardNumber !== "" && validDate && date !== "" && validCvv && cvvNumber !== ""
        && validNameCard && nameCard !== "") {
        setPayClick(false);
        setLoading(true)
        console.log('hello')
        const token = window.sessionStorage.getItem('authToken')
        const user = jwtDecode(token)
        console.log('token', token)
        console.log('id', user)
        axios({
          method: 'post',
          url: 'https://fish-demo.onrender.com/purchase/buyItem',
          data: {
            user_id: user.user_id,
            cart: cart,
          }
        })
          .then(res => {
            console.log('hello', res);
            setLoading(false);
            sessionStorage.removeItem('cart')
            sessionStorage.removeItem('checkOutPage')
            deleteCookie('productid')
            setShowToast(true)
            console.log('loading', loading)
            alert('You paid successfully')
            navigate('/')


            // alert(res.data.response);

          })
          .catch(err => console.log('error', err))
      }
    
  }
  const handlePay = () => {
    console.log('hellopay')
    setPayClick(true)
  }

  return (
    <>
      <Grid container spacing={2} sx={{ m: 1 }}>
        <Grid item xs={12} md={5} >
          <Grid item xs={12} md={12} sx={{ display: 'flex', justifyContent: 'center', m: 1 }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              Order Summary
            </Typography>
          </Grid>
          {cart.map((item) => (
            <Paper
              key={item.prod_id}
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
        </Grid>
        <Grid item xs={12} md={6} >
          <Grid item xs={12} md={12} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              Billing Information
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} sx={{ marginTop: 2 }}>
            <Paper sx={{ display: 'flex', flexDirection: 'column', boxShadow: 10 }}>
              <Grid container spacing={1} sx={{ m: 1 }}>
                <Grid item xs={5} md={6} sx={{ display: 'flex', alignItems: 'flex-start' }}>
                  Subtotal
                </Grid>

                <Grid item xs={6} md={6} sx={{ display: 'flex', alignItems: 'flex-end' }}>
                  ${totalBill}
                </Grid>
                <Grid item xs={6} md={6} sx={{ display: 'flex', alignItems: 'flex-start' }}>
                  Shipping
                </Grid>
                <Grid item xs={6} md={6} sx={{ display: 'flex', alignItems: 'flex-end' }}>
                  $4.99
                </Grid>
              </Grid>
              <Divider sx={{ borderborderColor: 'divider', marginX: 1 }} />
              <Grid container spacing={1} sx={{ m: 1 }}>
                <Grid item xs={6} md={6} sx={{ display: 'flex', alignItems: 'flex-start' }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Total </Typography>
                </Grid>
                <Grid item xs={6} md={6} sx={{ display: 'flex', alignItems: 'flex-end' }}>
                  ${(totalBill + 4.99).toFixed(2)} USD (including VAT)
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <form onSubmit={handleSubmit} >
            <Grid container spacing={1} sx={{ marginTop: 3 }}>
              <Grid item xs={12} md={12} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start' }} >
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Personal Information
                </Typography>
              </Grid>
              <Grid item xs={12} md={6} >
                <TextField
                  placeholder='Name'
                  type='text'
                  fullWidth
                  value={name}
                  error={!validName}
                  onChange={handleName}
                />
              </Grid>
              <Grid item xs={12} md={6} >
                <TextField
                  placeholder='Phone Number'
                  type='text'
                  fullWidth
                  value={phone}
                  error={!validPhone}
                  onChange={handlePhone}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                  placeholder='Address'
                  type='text'
                  fullWidth
                  value={address}
                  error={!validAddress}
                  onChange={handleAddress}
                />
              </Grid>

              <Divider sx={{ marginY: 1, borderborderColor: 'divider' }} />
              <Grid item xs={12} md={12} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 1 }} >
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Payment Information
                </Typography>
              </Grid>
              <Grid item xs={12} md={12}  >
                <TextField
                  placeholder='Card Number'
                  type='text'
                  fullWidth
                  value={cardNumber}
                  error={!validCard}
                  onChange={handleCardNumber}
                />
              </Grid>
              <Grid item xs={6} md={6} >
                <TextField
                  placeholder='Expiration date'
                  type='text'
                  fullWidth
                  value={date}
                  error={!validDate}
                  onChange={handleDate}
                />
              </Grid>
              <Grid item xs={6} md={6} >
                <TextField
                  placeholder='Security code'
                  type='text'
                  fullWidth
                  value={cvvNumber}
                  error={!validCvv}
                  onChange={handleCvvNumber}

                />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                  placeholder='Name Card'
                  type='text'
                  fullWidth
                  name='Group Object name'
                  value={nameCard}
                  error={!validNameCard}
                  onChange={handleNameCard}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <LoadingButton loading={loading} type="submit" size='large'  fullWidth variant='contained' sx={{ backgroundColor: '#1773b0' }}>
                  Pay Now
                </LoadingButton>
              </Grid>
            </Grid>
          </form>
        </Grid>

      </Grid>
      
        
      

    </>
  );
};

export default Checkout;
