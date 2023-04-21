import React, { useContext } from 'react';

import Navbar from '../Navbar.jsx'
import SliderShow from '../SliderShow'
import Body from '../Body'
import Footer from '../Footer.jsx'
//context
import { productsContext } from '../ProductsContextProvider.jsx';
import Loader from '../Loader.jsx';

const Home = () => {
    
    const products = useContext(productsContext);
    
    return (
        <div>
            {
                products.length === 0 ?
                <Loader /> :
                <>
                    <Navbar />
                    <SliderShow />
                    <Body />
                    <Footer />
                </>
            }
        </div>
    );
};

export default Home;