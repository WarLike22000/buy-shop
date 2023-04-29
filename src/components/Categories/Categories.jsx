import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
//context
import { productsContext } from '../ProductsContextProvider.jsx';

import OneCategory from './OneCategory.jsx';

import { ArrowBack } from '@mui/icons-material';
import { Container, IconButton } from '@mui/material';

const Categories = () => {

    const products = useContext(productsContext);
    const locationProduct = useParams();
    const navigate = useNavigate();

    const productsFilter = products.filter(item => item.category === locationProduct.category);
    
    return (
        <Container maxWidth='xl'>
            <div style={{margin: '90px auto 0', display: 'flex', justifyContent: 'center'}}><h3>{locationProduct.category}</h3></div>
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', position: 'relative', marginTop: '40px'}}>
                {
                    productsFilter.map(item => <OneCategory key={item.id} product={item} />)
                }
            </div>
        </Container>
    );
};

export default Categories;