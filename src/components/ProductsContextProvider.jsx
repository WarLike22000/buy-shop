import React, { useEffect, createContext } from 'react';

import { useSelector, useDispatch } from 'react-redux';
//redux
import { fetchProducts } from '../features/productsSlice.jsx';

export const productsContext = createContext();

const ProductsContextProvider = ( { children } ) => {

    const products = useSelector(store => store.products.products)
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchProducts())
    }, []);
    
    return (
        <productsContext.Provider value={products}>
            { children }
        </productsContext.Provider>
    );
};

export default ProductsContextProvider;