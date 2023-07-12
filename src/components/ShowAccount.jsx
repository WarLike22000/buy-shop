import React, { useContext, useState } from 'react';
import styles from './ShowAccount.module.css';
import { useNavigate } from 'react-router-dom';

import { Button, Divider, IconButton } from '@mui/material';
import { Bolt, CardGiftcard, Close } from '@mui/icons-material';

import { reducerContext } from './ReducerProvider.jsx';
//redux
import { removeAccount } from '../features/selectedSlice';

const ShowAccount = ( { showAccount } ) => {

    const [open , setOpen] = useState(false);
    const { dispatch } = useContext(reducerContext);
    const navigate = useNavigate();

    const clickHandler = () => {
        setOpen(false)
        navigate('/shop-cart')
    }
    
    return (
            <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} className={showAccount || open ? styles.mainContainer : styles.mainContainerTwo}>
                <div className={styles.container}>
                    <div>
                        <IconButton onClick={() => setOpen(false)}>
                            <Close sx={{color: '#4993FA'}} />
                        </IconButton>
                    </div>
                    <Divider variant='middle' />
                    <div onClick={() => setOpen(false)}>
                        <Bolt />
                        <p>شارژ کیف پول</p>
                    </div>
                    <Divider variant='middle' />
                    <div onClick={clickHandler}>
                        <CardGiftcard />
                        <p>سفارش ها</p>
                    </div>
                    <Divider variant='middle' />
                    <div>
                        <Button onClick={() => dispatch(removeAccount())} variant='outlined' size='small' color='error'>خروج از حساب</Button>
                    </div>
                </div>
            </div>
    );
};

export default ShowAccount;