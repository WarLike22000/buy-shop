import React, { useContext, useState } from 'react';
import styles from './ShopCart.module.css';
import { Link, useNavigate } from 'react-router-dom';

import { Button, Container, IconButton, Menu, MenuItem } from '@mui/material';

//components
import DetailShopCart from './DetailShopCart.jsx';

//context
import { reducerContext } from './ReducerProvider.jsx';
import NoneCart from './NoneCart.jsx';
import { MoreVert } from '@mui/icons-material';

const ShopCart = () => {

    const { state, dispatch } = useContext(reducerContext);
    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        dispatch({type: 'CLEAR'})
        setAnchorEl(null);
    };
    const handleCloseOne = () => {
        setAnchorEl(null)
    }
    const handleCloseTwo = () => {
        navigate(-1)
        setAnchorEl(null);
    }
    
    return (
        <Container maxWidth='xl'>
            <div className={styles.container}>
                <div style={{marginBottom: 100}}>
                    {
                        state.selectedItems.length === 0 && !state.checkout ? <NoneCart /> :
                        state.selectedItems.map(product => <DetailShopCart key={product.id} product={product} />)
                    }
                </div>
                {
                    state.total >= 1 && state.itemsCounter &&
                <div className={styles.containerLeft}>
                    <div className={styles.clear}>
                        <IconButton id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick} sx={{position: 'absolute', top: '0', left: '0'}}>
                            <MoreVert />
                        </IconButton>
                        <Menu id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleCloseOne}
                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                            }}>
                            <MenuItem sx={{fontWeight: 500, fontSize: '13px', color: '#000'}} onClick={handleClose}>پاک کردن سبد خرید</MenuItem>
                            <MenuItem sx={{fontSize: '13px', fontWeight: 500, color: '#000'}} onClick={handleCloseTwo}>بازگشت به صفحه قبل</MenuItem>
                        </Menu>
                    </div>
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