import { Box, Typography } from '@mui/material'
import React from 'react'


export default function MissingPage() {
  return (
    
    <Box
      sx={{
        height: "75vh",
        fontFamily: "'Ropa Sans' sans-serif",
        width: "100%",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Typography variant='h1'
        sx={{
          fontSize: "40px",
          margin: "0px",
          color: "black",
        }}
      >
        Trang không tồn tại.
      </Typography>

      <Box
        sx={{
          margin: "30px auto",
          // border: "5px solid black",
          fontSize: "126px",
          lineHeight: "126px",
          borderRadius: "30px",
        }}
      >
        404
      </Box>

      <Typography variant="h5" 
        sx={{ 
          marginTop: '10px',
          fontSize: "25px",
          textAlign: 'center',
          width: '35%'
        }}
      >
        Xin lỗi, trang bạn đang tìm kiếm không tồn tại.
      </Typography>
    </Box>
  )
}
