import { Box, Paper } from "@mui/material"

const CardOutLook = (props) => {
    return (
        <Box sx = {{
            
            height: "100%",
            display: 'flex',
            flexDirection: 'column',
            width: '100%'
        }}>
            {props.children}
        </Box>
    )
}

export default CardOutLook;