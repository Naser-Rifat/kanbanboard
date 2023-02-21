import { createSlice } from "@reduxjs/toolkit";
import { columnData } from "../data";
const boardsSlice = createSlice({
  name: "boards",
  initialState: JSON.parse(localStorage.getItem("data"))
    ? JSON.parse(localStorage.getItem("data")).columns
    : columnData.columns,
  reducers: {
    addTask: (state, action) => {
      const { title, newColIndex } = action.payload;
      const task = { title };
      const column = state.find((col, index) => index === newColIndex);
      column.tasks.push(task);
    },

    dragTask: (state, action) => {
      const { colIndex, prevColIndex, taskIndex } = action.payload;
      const prevCol = state.find((col, i) => i === prevColIndex);
      const task = prevCol.tasks.splice(taskIndex, 1)[0];
      state.find((col, i) => i === colIndex).tasks.push(task);
    },
  },
});

export default boardsSlice;
