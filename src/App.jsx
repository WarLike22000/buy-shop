import React, { useEffect } from 'react'
//API
import ProductsContextProvider from './components/ProductsContextProvider'
//reducer
import ReducerProvider from './components/ReducerProvider';
//components
import Home from './components/home/Home.jsx';
import ProductDetail from './components/ProductDetail';
import ShopCart from './components/ShopCart';
import PageNotFound from './components/PageNotFound';
import Categories from './components/Categories/Categories';
import Login from './components/Login';
import Navbar from './components/Navbar.jsx';
import SignIn from './components/SignIn';

import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

function App() {

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <ReducerProvider>
      <ProductsContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/productDetail/:id' element={<ProductDetail />} />
          <Route path='/shop-cart' element={<ShopCart />} />
          <Route path='/page-not-found' element={<PageNotFound />} />
          <Route path='/products/:category' element={<Categories />} />
          <Route path='/login-page' element={<Login />} />
          <Route path='/signIn' element={<SignIn />} />
          <Route path='/*' element={<Navigate to='/page-not-found' />} />
        </Routes>
      </ProductsContextProvider>
    </ReducerProvider>
  )
  
}

export default App;
