import { createSlice } from '@reduxjs/toolkit'


export const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        items: []
    },
    reducers: {
        addToBasket: (state, action) => {
            state.items = [...state.items, action.payload]
        },
        removeFromBasket: (state, action) => {
            state.value += 1
        }
    }
})

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions

export const selectBasketItems = state => state.basket.items;

export const selectBasketItemsWithId = (state, id) => state.basket.items.filter((item) => item.id == id);

export default basketSlice.reducer


