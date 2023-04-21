import React from 'react';

import notFound from '../assets/pageNotFound-removebg-preview.png'

import { Link } from 'react-router-dom';

import { Button } from '@mui/material';

const PageNotFound = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column'}}>
            <img style={{width: '350px'}} src={notFound} alt='page-not-found' />
            <Link to='/'>
                <Button variant='contained'>بازگشت به صفحه اصلی</Button>
            </Link>
        </div>
    );
};

export default PageNotFound;