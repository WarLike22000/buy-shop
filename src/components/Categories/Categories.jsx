import React, { useContext } from 'react';
//context
import { productsContext } from '../ProductsContextProvider.jsx';
import { useParams } from 'react-router-dom';
import OneCategory from './OneCategory.jsx';

const Categories = () => {

    const products = useContext(productsContext);
    const locationProduct = useParams();

    const productsFilter = products.filter(item => item.category === locationProduct.category);
    
    return (
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
            {
                productsFilter.map(item => <OneCategory key={item.id} product={item} />)
            }
        </div>
    );
};

export default Categories;