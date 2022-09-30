import { createSlice } from "@reduxjs/toolkit";

const demoCardSlice = createSlice({
  name: "demoCard",
  initialState: {
      demoCard: {
      id: 1,
      cardNumber: "xxxx xxxx xxxx xxxx",
      cardHolderName: "FIRSTNAME LASTNAME",
      validThru: "mm/yy",
      ccv: "xxx",
      vendor: "VISA",
      isActive: false
      }
  },
  reducers: {
    update: (state, action) => {

      let date;
      if(action.payload[2][1]){
        date = `${action.payload[2][1]}/${action.payload[2][0]}`
      } else {
        date = "mm/yy"
      }
      state.demoCard = {
        id: 1,
        cardNumber: action.payload[0],
        cardHolderName: action.payload[1].toUpperCase(),
        validThru: date,
        ccv: action.payload[3],
        vendor: action.payload[4],
        isActive: false
      }
    }
  }
})
export const { update } = demoCardSlice.actions
export default demoCardSlice.reducer;