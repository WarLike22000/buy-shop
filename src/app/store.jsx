import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/productsSlice.jsx'
import selectedItemsReducer from '../features/selectedSlice.jsx';

const store = configureStore({
    reducer: {
        products: productsReducer,
        selectedItems: selectedItemsReducer
    }
})

export default store;