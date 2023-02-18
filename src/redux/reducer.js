import data from "../data.json";
import { ADD_TASK, MOVE_TASK } from "./actionTypes";

function rootReducer(state = data.boards, action) {
  console.log(action);
  switch (action.type) {
    case ADD_TASK:
      const { title } = action.payload.task;
      const task = { title };
      const boardIndex = state.findIndex((board) => board.isActive);
      const board = state[boardIndex];
      const column = board.columns.find((col, index) => index === 0);
      
      // Create a new array with the new task added
      const newTasks = [...column.tasks, task];

      // Create a new column object with the new array of tasks
      const newColumn = {
        ...column,
        tasks: newTasks,
      };

      // Create a new board object with the new column
      const newColumns = [...board.columns];
      newColumns[action.payload.task.newColIndex] = newColumn;
      const newBoard = {
        ...board,
        columns: newColumns,
      };

      // Create a new state with the new board
      const newState = [...state];
      newState[boardIndex] = newBoard;
      return newState;

    case MOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.taskId
            ? { ...task, column: action.payload.column }
            : task
        ),
      };
    default:
      return state;
  }
}

export default rootReducer;
