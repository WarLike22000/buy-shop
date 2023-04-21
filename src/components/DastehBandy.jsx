import React, { useState } from 'react';
import styles from './DastehBandy.module.css';
import { Divider } from '@mui/material';
import { Link } from 'react-router-dom';

const DastehBandy = ( { open } ) => {

    const [openList, setOpenList] = useState(false)
    
    return (
        <div onMouseEnter={() => setOpenList(true)} onMouseLeave={() => setOpenList(false)} className={open || openList ? styles.container : styles.containerTwo}>
            <Link to='/products/jewelery'><div onClick={() => setOpenList(false)}><p>جواهرات</p></div></Link>
            <Divider  />
            <Link to="/products/men's clothing"><div onClick={() => setOpenList(false)}><p>مردانه</p></div></Link>
            <Divider />
            <Link to='/products/electronics'><div onClick={() => setOpenList(false)}><p>الکترونیک</p></div></Link>
            <Divider />
            <Link to="/products/women's clothing"><div onClick={() => setOpenList(false)}><p>زنانه</p></div></Link>
        </div>
    );
};

export default DastehBandy;