import { createSlice } from "@reduxjs/toolkit";

export const inventorySlice = createSlice({
  name: "inventory",
  initialState: {
    data: [
      {
        name: "Bluetooth",
        category: "Electronic",
        value: "$150",
        quantity: 5,
        price: "$30",
        disbaled: false,
      },
      {
        name: "Edifier M43560",
        category: "Electronic",
        value: "0",
        quantity: 0,
        price: "$0",
        disbaled: false,
      },
      {
        name: "Sony 4k ultra 55 inch TV",
        category: "Electronic",
        value: "$1190",
        quantity: 17,
        price: "$70",
        disbaled: false,
      },
      {
        name: "Samsumg 55 inch TV",
        category: "Electronic",
        value: "$600",
        quantity: 50,
        price: "$12",
        disbaled: false,
      },
      {
        name: "samsumg S34 Ultra",
        category: "phone",
        value: "$0",
        quantity: 0,
        price: "$0",
        disbaled: false,
      },
    ],
  },
  reducers: {
    setInventory: (state, action) => {
      state.data = action.payload;
    },
    disableInventory: (state, action) => {
      const x = state.data;
      x.forEach((element) => {
        if (element.name === action.payload.name) {
          console.log(element.name);
          element.disbaled = !element.disbaled;
        }
      });
      console.log(x[0].disbaled);
      state.data = x;
    },
    editInventory: (state, action) => {
      const x = state.data;
      for (let i = 0; i < x.length; i++) {
        if (x[i].name === action.payload.name) {
          x[i].category = action.payload.category;
          x[i].price = action.payload.price;
          x[i].quantity = action.payload.quantity;
          x[i].value = action.payload.value;
        }
      }
      state.data = x;
    },
    // editInventory: (state) => {
    //   state.value -= 1;
    // },
    // addInventory: (state, action) => {
    //   state.value += action.payload;
    //   },
    // dis
  },
});

// Action creators are generated for each case reducer function
export const { setInventory, disableInventory, editInventory } =
  inventorySlice.actions;

export default inventorySlice.reducer;
