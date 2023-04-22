import React, { useContext } from 'react';
import styles from './ShopCart.module.css';
import { Link, useNavigate } from 'react-router-dom';

import { Button, Container, IconButton } from '@mui/material';

//components
import DetailShopCart from './DetailShopCart.jsx';

//context
import { reducerContext } from './ReducerProvider.jsx';
import NoneCart from './NoneCart.jsx';
import { ArrowBack } from '@mui/icons-material';

const ShopCart = () => {

    const { state, dispatch } = useContext(reducerContext);
    const navigate = useNavigate();
    
    return (
        <Container maxWidth='xl'>
            <div className={styles.container}>
                <IconButton onClick={() => navigate(-1)} sx={{position: 'absolute', top: 10, left: 0}}>
                    <ArrowBack />
                </IconButton>
                <div style={{marginBottom: 100}}>
                    {
                        state.selectedItems.length === 0 && !state.checkout ? <NoneCart /> :
                        state.selectedItems.map(product => <DetailShopCart key={product.id} product={product} />)
                    }
                </div>
                {
                    state.total >= 1 && state.itemsCounter &&
                <div className={styles.containerLeft}>
                    <div>
                        <p>جمع سبد خرید</p>
                        <p>{state.total}</p>
                    </div>
                    <Button onClick={() => dispatch({type: 'CHECKOUT'})} variant='contained' color='primary' disableElevation sx={{width: '200px', height: '45px', margin: '0 8px'}}>ثبت سفارش</Button>
                </div>
                }
                {
                    state.checkout && <div className={styles.checkoutStyle}>
                        <h1>خرید شما با موفقیت ثبت شد و در انتظار تایید است.</h1>
                        <Link to='/'><Button>خرید بیشتر</Button></Link>
                    </div>
                }
            </div>
        </Container>
    );
};

export default ShopCart;