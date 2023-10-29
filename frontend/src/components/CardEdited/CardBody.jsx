import { Box } from "@mui/material"

const CardBody = (props) => {
    return (
        <Box sx = {{padding: 4, height: '100%', width: '100%'}}>
            {props.children}
        </Box>
    )
}

export default CardBody;