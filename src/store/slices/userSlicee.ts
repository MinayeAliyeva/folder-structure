const initialState = {
  tableData: [
    { key: "1", name: "John Brown", age: 32, actions: "h" },
    { key: "2", name: "Jim Green", age: 42 },
    { key: "3", name: "Joe Black", age: 32 },
    { key: "4", name: "Joe Black", age: 32 },
  ],
};

import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.tableData.push(action.payload);
    },
    editUser: (state, action) => {
      const index = state?.tableData.findIndex(
        (user) => user?.key === action.payload?.key
      );
      console.log("index", index);

      if (index > -1) {
        state.tableData[index] = action.payload;
      }
    },
  },
});

export const userReducer = userSlice.reducer;

export const { addUser, editUser } = userSlice.actions;
