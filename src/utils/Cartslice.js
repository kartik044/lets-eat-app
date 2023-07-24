import { createSlice } from "@reduxjs/toolkit";

 



   const cartSlice = createSlice({
    name: "cart", 
     initialState :{
        cartItems: [],
        Totalprice:[], // Example initial state for the "cart" slice
        // ... other properties
        searchtext:[]
      },
    reducers:{
        addItem:(state=[],action)=>{
           
            state.cartItems.push(action.payload )
        },
        clearCart:(state,action)=>{
              state.cartItems=[]
        },
        removeItem:(state,action)=>{
          state.cartItems=state.cartItems.filter((i)=>i.id!==action.payload)
        }, 
        Subtotal:(state)=>{
            let sum=0;
            state.cartItems.forEach((i)  => sum +=i.price/100 ? i.price/100 :i.defaultPrice/100 )
            state.Totalprice=sum
        },
        search:(state,action)=>{
             state.searchtext.push(action.payload)
        }
        
    }
   })  
        export const {addItem,clearCart,removeItem,Subtotal,search}= cartSlice.actions

      export default cartSlice.reducer