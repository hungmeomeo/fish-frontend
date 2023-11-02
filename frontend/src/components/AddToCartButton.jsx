import React from 'react'
import { Button } from '@mui/material'
import { getCookie, setCookie } from '../utils/CookieFunction';
function AddToCartButton(props) {
  console.log(props.productid);



  const handleAdd = (ID) => {
    let currentCookies = getCookie('productid')
    if (currentCookies != "") {
      if (currentCookies.length !== 1){
        currentCookies = decodeURIComponent(currentCookies);
        console.log('currinif', currentCookies);
      }
      
      let cookiePair = currentCookies.split(';')
      console.log('length', currentCookies.length);
      console.log('current', currentCookies);
      const newElement = `${ID}`
      cookiePair.push(newElement);
      let updateCookies = cookiePair.join(';');
      console.log('pair', cookiePair);
      console.log('ele', newElement);
      console.log('up', updateCookies);
      const encodedCookies = encodeURIComponent(updateCookies);
      setCookie("productid",encodedCookies)
    }
    else {
      setCookie("productid", ID)
    }


  }
  return (
    <Button onClick={() => handleAdd(props.productid)} sx={{
      backgroundColor: '#f44336', color: 'white', width: '100%', ":hover": {
        backgroundColor: "#f44336",
      }
    }}>
      ADD TO CART
    </Button>
  )
}

export default AddToCartButton