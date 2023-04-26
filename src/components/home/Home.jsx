import React, { useContext } from 'react';

import SliderShow from '../SliderShow'
import Body from '../Body'
import Footer from '../Footer.jsx'
import TopBody from '../TopBody';

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
                    <TopBody />
                    <SliderShow />
                    <Body />
                    <Footer />
                </>
            }
        </div>
    );
};

export default Home;