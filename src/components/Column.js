import React from "react";
import Task from "./Task";
import boardsSlice from "../redux/boardsSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Column({ colIndex }) {
  const dispatch = useDispatch();
  const columns = useSelector((state) => state.boards);
  const col = columns.find((col, i) => i === colIndex);

  const handleOnDrop = (e) => {
    const { prevColIndex, taskIndex } = JSON.parse(
      e.dataTransfer.getData("text")
    );
    console.log(prevColIndex, taskIndex);
    if (colIndex !== prevColIndex) {
      dispatch(
        boardsSlice.actions.dragTask({ colIndex, prevColIndex, taskIndex })
      );
    }
  };

  const handleOnDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="column" onDrop={handleOnDrop} onDragOver={handleOnDragOver}>
      <p className="col-name"></p>
      <p
        className="col-name heading-S"
        style={{
          backgroundColor: "#F16767",
          padding: 20,
          color: "#000",
          textAlign: "center",
        }}
      >
        {col.name}
      </p>
      {col.tasks.map((task, index) => {
        return <Task key={index} taskIndex={index} colIndex={colIndex} />;
      })}
    </div>
  );
}
