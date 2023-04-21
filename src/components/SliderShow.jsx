import React, { useContext, useState } from 'react';
import styles from './SliderShow.module.css';

import sabad from '../assets/sabad.jpg' 
import shop from '../assets/shop.jpg'
import shop1 from '../assets/shop1.jpg'
import weAreOpen from '../assets/we are open.jpg';
import buy from '../assets/buy.jpg';

import { Button, Container, IconButton, CardActionArea } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

//context
import { productsContext } from './ProductsContextProvider.jsx';

const SliderShow = () => {

    const [slider, setSlider] = useState([sabad, shop, weAreOpen, buy, shop1])
    const [counter, setCounter] = useState(0);

    const products = useContext(productsContext);
    
    return (
        <Container >
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <div onClick={() => setCounter(prevCounter => prevCounter <= slider.length - 2 ? prevCounter + 1 : prevCounter)} className={styles.right}><Button><ArrowForwardIosIcon /></Button></div>
                <img src={slider[counter]} alt={`${slider[counter]}Img`} />
                <div onClick={() => setCounter(prevCounter => prevCounter > 0 ? prevCounter - 1 : prevCounter)} className={styles.left}><Button><ArrowBackIosIcon sx={{ml: '8px'}} /></Button></div>
            </div>
        </div>
        </Container>
    );
};

export default SliderShow;