import { Box, Typography } from "@mui/material"

const CardHead = (props) => {
    return (
        <Box sx = {{padding: 4, paddingTop: 4, paddingBottom: 0}}>
            <Box sx = {{display: 'flex', alignItems: 'center', columnGap: 2}}>
                <Typography variant = 'h4' sx = {{fontWeight: 'bold'}}>
                    {props.children}
                </Typography>
            </Box>
        </Box>
    )
}

export default CardHead;