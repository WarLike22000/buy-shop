const BASE_URL = 'https://fakestoreapi.com';
import axios from 'axios';

const getProducts = async () => {
    const response = await axios.get(`${BASE_URL}/products`).catch((error) => location.reload())
    return response.data
};

export default getProducts;