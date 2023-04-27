import React from 'react';

import { Link } from 'react-router-dom';
import empity from '../assets/empityShop-removebg-preview.png';
import { Button } from '@mui/material';

const NoneCart = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', flexDirection: 'column', marginTop: '60px'}}>
            <img style={{width: '300px'}} src={empity} alt='empityShop' />
            <Link style={{textDecoration: 'none'}} to='/'><Button>بازگشت به صفحه اصلی</Button></Link>
        </div>
    );
};

export default NoneCart;