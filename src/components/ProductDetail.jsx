import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { Box, Button, Container, IconButton, Typography } from '@mui/material';
//style
import styles from './ProductDetail.module.css';
//context
import { productsContext } from './ProductsContextProvider.jsx';

import { isInCart, quantityCount } from '../helper/function';

import { Add, ArrowBack, DeleteOutline, Remove } from '@mui/icons-material';

import { reducerContext } from './ReducerProvider.jsx';

//redux
import { addItem, decrease, increase, removeItem } from '../features/selectedSlice';

const ProductDetail = () => {

    const { id } = useParams();
    const products = useContext(productsContext);
    const product = products[id - 1];
    const { image, title, price, description, category, rating: {count}  } = product;

    const { selectedItems, dispatch } = useContext(reducerContext);

    const navigate = useNavigate();
    const arrowHandler = () => {
        navigate(-1)
    };
    
    return (
        <Container maxWidth='lg'>
            <div className={styles.mainContainer}>
            <div className={styles.container}>
                <IconButton onClick={arrowHandler} sx={{position: 'absolute', top: '10px', left: '10px'}}>
                    <ArrowBack />
                </IconButton>
                <div className={styles.containerImg}>
                    <img src={image} alt='imageDetail' />
                </div>
                <div className={styles.containerTwo}>
                    <h3>{title}</h3>
                    <p>درباره محصول: {description}</p>
                    <p>قیمت: {price}</p>
                    <p>دسته: {category}</p>
                    <p>موجودی در انبار: {count}</p>
                    {
                        quantityCount(selectedItems, product.id) >= 1 && <Box sx={{display: 'flex', alignItems: 'center', width: '150px', height: '31px', mt: 2, mb: 2}}>
                            <IconButton onClick={() => dispatch(increase(product))}><Add /></IconButton>
                            <Typography color='#19376D' sx={{fontWeight: 600, mr: 1, ml: 1, textAlign: 'center'}}>{quantityCount(selectedItems, product.id)}</Typography>
                            {
                                quantityCount(selectedItems, product.id) > 1 && <IconButton onClick={() => dispatch(decrease(product))}><Remove /></IconButton>
                            }
                            {
                                quantityCount(selectedItems, product.id) === 1 && <IconButton onClick={() => dispatch(removeItem(product))}><DeleteOutline /></IconButton>
                            }
                        </Box>
                    }
                    {
                        isInCart(selectedItems, product.id) && <Button onClick={() => dispatch(addItem(product))} disableElevation sx={{fontSize: '13px', fontWeight: 700, mt: 2, mb: 2}} variant='contained' size='small'>افزودن به سبد خرید</Button>
                    }
                </div>
            </div>
            </div>
        </Container>
    );
};

export default ProductDetail;