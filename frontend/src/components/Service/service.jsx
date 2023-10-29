import { products } from "../../data/products";

const Service = {
    getData: ({from, to}) => {
        return new Promise((resolve, reject) => {
            resolve({
                count: products.length,
                data: products.slice(from,to)
            })
        })
    }
}

export default Service