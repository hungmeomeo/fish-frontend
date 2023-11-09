import React, { useEffect, useState } from 'react'
import { Box, Pagination } from "@mui/material"
import Service from '../Service/service';

const pageSize = 24;
function AppPagination({ setProduct, data }) {
  const [count, setCount] = useState(0)
  // const [page, setPage] = useState(1);
  if (count !== data.length){
    setCount(data.length);
  }
  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: pageSize
  });
  
  console.log('length', data.length)
  console.log('count', pagination.count)
  useEffect(() => {
    setPagination({
      ...pagination,
      count: count,
      from: 0,
      to: pageSize
    })
  }, [count])
  useEffect(() => {
    Service.getData({data, from: pagination.from, to: pagination.to }).then(response => {
      setPagination({
        ...pagination,
        count: count
      })
      console.log('countinpagi', pagination.count)
      console.log('productsinpagi',response.data)
      setProduct(response.data);
    });
  }, [pagination.from, pagination.to]);
  const handlePageChange = (event, page) => {
    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;
    // setPage(page);
    setPagination({ ...pagination, from: from, to: to });
  }
  return (
    <Box justifyContent="center" alignItems="center" display="flex" sx={{ margin: "20px 0px" }}>
      <Pagination
        count={Math.ceil(pagination.count / pageSize)}
        
        onChange={handlePageChange}
      />
    </Box>
  )
}

export default AppPagination;