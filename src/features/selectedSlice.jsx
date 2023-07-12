import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedItems: [],
    itemsCounter: 0,
    total: 0,
    checkout: false,
    account: false
}

const sumItems = items => {
    const itemsCounter = items.reduce((total, product) => total + product.quantity, 0);
    const total = items.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
    return {itemsCounter, total};
};

const selectedItems = createSlice({
    name: "selectedItems",
    initialState,
    reducers: {
        addItem: (state, action) => {
            if(!state.selectedItems.find(item => item.id == action.payload.id)) {
                state.selectedItems.push({
                    ...action.payload,
                    quantity: 1
                })
            }
            state.checkout = false
            state.itemsCounter = sumItems(state.selectedItems).itemsCounter;
            state.total = sumItems(state.selectedItems).total;
            
        },
        removeItem: (state, action) => {
            const newSelectedItems = state.selectedItems.filter(item => item.id != action.payload.id);
            state.selectedItems = newSelectedItems;
            state.itemsCounter = sumItems(newSelectedItems).itemsCounter;
            state.total = sumItems(newSelectedItems).total;
        },
        increase: (state, action) => {
            const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexI].quantity++;
            state.itemsCounter = sumItems(state.selectedItems).itemsCounter;
            state.total = sumItems(state.selectedItems).total;
        },
        decrease: (state, action) => {
            const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexI].quantity--;
            state.itemsCounter = sumItems(state.selectedItems).itemsCounter;
            state.total = sumItems(state.selectedItems).total;
        },
        clear: (state) => {
            state.selectedItems = [];
            state.itemsCounter = 0;
            state.total = 0;
            state.checkout = false;
        },
        checkout: (state) => {
            state.selectedItems = [];
            state.itemsCounter = 0;
            state.total = 0;
            state.checkout = true;
        },
        createAccount: (state) => {
            state.account = true
        },
        removeAccount: (state) => {
            state.account = false
        }
    }
})

export default selectedItems.reducer;
export const { addItem, removeItem, increase, decrease, clear, checkout, createAccount, removeAccount } = selectedItems.actions;