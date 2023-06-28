import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      let isNewItem = true;
      for (let index = 0; index < state.items.length; index++) {
        if (state.items[index].id == action.payload.id) {
          state.items[index] = {
            ...state.items[index],
            count: state.items[index].count + 1,
          };
          isNewItem = false;
          break;
        }
      }
      if(isNewItem == true) state.items.push({...action.payload, count : 1});
    },
    removeItem: (state, action)=>{
       let removeItemIndex = -1;
       for(let index in state.items){
          if(state.items[index].id == action.payload.id){
             if(state.items[index].count == 1){
               removeItemIndex = index;
             } else {
                state.items[index] = {...state.items[index], count : --state.items[index].count};
             }
             break;
          }
       }
       if(removeItemIndex != -1){
          state.items.splice(removeItemIndex, 1);
       }
    }
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
