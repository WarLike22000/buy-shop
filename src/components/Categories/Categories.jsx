import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
//context
import { productsContext } from '../ProductsContextProvider.jsx';

import OneCategory from './OneCategory.jsx';

import { ArrowBack } from '@mui/icons-material';
import { IconButton } from '@mui/material';

const Categories = () => {

    const products = useContext(productsContext);
    const locationProduct = useParams();
    const navigate = useNavigate();

    const productsFilter = products.filter(item => item.category === locationProduct.category);
    
    return (
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', position: 'relative'}}>
            <IconButton onClick={() => navigate(-1)} sx={{position: 'absolute', top: 1, left: 1, zIndex: 15}}>
                <ArrowBack />
            </IconButton>
            {
                productsFilter.map(item => <OneCategory key={item.id} product={item} />)
            }
        </div>
    );
};

export default Categories;