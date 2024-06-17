import { configureStore } from "@reduxjs/toolkit";
import inventoryReducer from "../reducers/inventory.reducer";

export default configureStore({
  reducer: {
    inventory: inventoryReducer,
  },
});
