import React, { useContext } from 'react';
import { Container } from '@mui/material';
//styles
import styles from './Body.module.css';
//context
import { productsContext } from './ProductsContextProvider';
//components
import CartProduct from './CartProduct';

const Body = () => {

    const products = useContext(productsContext);
    
    return (
        <Container maxWidth='xl'>
        <div className={styles.container} >
            {
                products.map(product => <CartProduct key={product.id} product={product} />)
            }
        </div>
        </Container>
    );
};

export default Body;