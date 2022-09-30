import { createSlice } from "@reduxjs/toolkit";

const cardListSlice = createSlice({
  name: "cardList",
  initialState: {
    cards: [{
    id: 2,
    cardNumber: 2345678998764321,
    cardHolderName: "test",
    validThru: "12/22",
    ccv: 456,
    vendor: "MASTERCARD",
    isActive: false
    }
  ],
    latestId: 2,
    activeCard: [{
      id: 1,
      cardNumber: 2345678998764321,
      cardHolderName: "test",
      validThru: "10/23",
      ccv: 123,
      vendor: "VISA",
      isActive: true
    }]
  },
  reducers: {
   setActive: (state, action) =>{

    if (state.activeCard.length == 1){
      state.cards.forEach((card,i) => {
        if(card.id == action.payload){
          state.activeCard.push(card);
          state.cards.splice(i,1);
        }
      })
      state.activeCard.map((card) => {
        if(card.id !== action.payload){
          card.isActive = false;
          state.activeCard.shift();
          state.cards.push(card);   
      }
      })
    }
   },
   addCard: (state, action) => {
    action.payload.id = state.latestId +1
    action.payload.isActive = false
    state.cards.push(action.payload)
   },
   removeCard: (state, action) => {
    let startIndex;
    state.cards.filter((card, i) => {
      if(card.id == action.payload[0]){
        startIndex = i
        console.log("cards index is:" + startIndex)
      }
    })
    state.cards.splice(startIndex, 1)
   }
  }
})
export const { setActive, addCard, removeCard } = cardListSlice.actions
export default cardListSlice.reducer;