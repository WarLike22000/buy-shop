import React, { useContext } from 'react';
import styles from './DetailShopCart.module.css';

import { isInCart, quantityCount } from '../helper/function.js';

import { reducerContext } from './ReducerProvider.jsx';

import { Add, AddBusiness, DeleteOutline, GppGood, Remove, Store } from '@mui/icons-material';
import { Box, Button, IconButton, Typography } from '@mui/material';

const DetailShopCart = ( { product } ) => {

    const { image, title, price } = product;
    const { state, dispatch } = useContext(reducerContext);
    
    return (
        <div className={styles.container}>
            <div className={styles.rightContainer}>
                <img src={image} alt='ImgProduct' />
                <div>
                {
                        quantityCount(state, product.id) >= 1 && <Box sx={{display: 'flex', alignItems: 'center'}}>
                            <IconButton onClick={() => dispatch({type: 'INCREASE', payload: product})}><Add /></IconButton>
                            <Typography color='#19376D' sx={{fontWeight: 600, mr: 1, ml: 1}}>{quantityCount(state, product.id)}</Typography>
                            {
                                quantityCount(state, product.id) > 1 && <IconButton onClick={() => dispatch({type: 'DECREASE', payload: product})}><Remove /></IconButton>
                            }
                            {
                                quantityCount(state, product.id) === 1 && <IconButton onClick={() => dispatch({type: 'REMOVE_ITEM', payload: product})}><DeleteOutline /></IconButton>
                            }
                        </Box>
                    }
                    {
                        isInCart(state, product.id) && <Button onClick={() => dispatch({type: 'ADD_ITEM', payload: product})} disableElevation sx={{fontSize: '13px', fontWeight: 700}} variant='contained' size='small'>افزودن</Button>
                    }
                </div>
            </div>
            <div className={styles.leftContainer}>
                <h4>{title}</h4>
                <div>
                    <GppGood color='success' />
                    <p>گارانتی اصالت و سلامت فیزیکی کالا</p>
                </div>
                <div>
                    <Store color='primary' />
                    <p>بای شاپ</p>
                </div>
                <div>
                    <AddBusiness color='warning' />
                    <p>موجود در انبار بای شاپ</p>
                </div>
                <h5>قیمت: {price}</h5>
            </div>
        </div>
    );
};

export default DetailShopCart;