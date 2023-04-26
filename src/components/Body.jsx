import React, { useContext } from 'react';
import { Container } from '@mui/material';
//styles
import styles from './Body.module.css';
//context
import { productsContext } from './ProductsContextProvider';
//components
import CartProduct from './CartProduct';
import { AddBusiness } from '@mui/icons-material';

const Body = () => {

    const products = useContext(productsContext);
    
    return (
        <Container maxWidth='xl'>
            <div style={{margin: '20px 35px', display: 'flex', alignItems:'end'}}>
                <AddBusiness sx={{color: '#1A5F7A'}} fontSize='large' />
                <h3 style={{marginRight: '10px', color: '#1A5F7A', fontSize: '22px'}}>محصولات</h3>
            </div>
        <div className={styles.container} >
            {
                products.map(product => <CartProduct key={product.id} product={product} />)
            }
        </div>
        </Container>
    );
};

export default Body;