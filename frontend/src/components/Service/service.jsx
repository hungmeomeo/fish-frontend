

const Service = {
    getData: ({data, from, to}) => {
        return new Promise((resolve, reject) => {
            console.log('productinservice', data)
            resolve({
                count: data.length,
                data: data.slice(from,to)
            })
        })
    }
}

export default Service