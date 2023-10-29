import React from 'react'
import { Button } from '@mui/material'
function AddToCartButton() {
  return (
    <Button sx={{
        backgroundColor: '#f44336', color: 'white', width: '100%', ":hover": {
            backgroundColor: "#f44336",
        }
    }}>
        ADD TO CART
    </Button>
  )
}

export default AddToCartButton