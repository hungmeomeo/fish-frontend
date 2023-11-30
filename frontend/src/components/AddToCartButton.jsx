import React, { useState } from 'react'
import { Button } from '@mui/material'
import { getCookie, setCookie } from '../utils/CookieFunction';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function AddToCartButton(props) {
  console.log(props.productid);


  // const [notification, setNotification] = useState(false);
  const handleAdd = (ID) => {
    let currentCookies = getCookie('productid')
    if (currentCookies != "") {
      if (currentCookies.length !== 1) {
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
      setCookie("productid", encodedCookies)
    }
    else {
      setCookie("productid", ID)
    }
    toast.success('Đã thêm vào giỏ hàng', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
  });

  }
  return (
    <>
      <Button onClick={() => handleAdd(props.productid)} variant = 'outlined' sx = {{width: '50%'}}>
        Thêm vào giỏ hàng
      </Button>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="colored"
      />
    </>
  )
}

export default AddToCartButton