```jsx
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = state.items.find(
        (product) => product.id === action.payload.id
      );

      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1
        });
      }
    },

    removeItem: (state, action) => {
      state.items = state.items.filter(
        (product) => product.id !== action.payload
      );
    },

    updateQuantity: (state, action) => {
      const item = state.items.find(
        (product) => product.id === action.payload.id
      );

      if (item) {
        item.quantity = action.payload.quantity;

        if (item.quantity <= 0) {
          state.items = state.items.filter(
            (product) => product.id !== action.payload.id
          );
        }
      }
    }
  }
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
```
