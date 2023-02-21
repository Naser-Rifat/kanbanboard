import React from "react";
import { useSelector } from "react-redux";

export default function Task({ taskIndex, colIndex }) {
  const columns = useSelector((state) => state.boards);

  const col = columns.find((col, i) => i === colIndex);
  const task = col.tasks.find((task, i) => i === taskIndex);

  const handleOnDrag = (e) => {
    e.dataTransfer.setData(
      "text",
      JSON.stringify({ taskIndex, prevColIndex: colIndex })
    );
  };

  return (
    <div>
      <div
        draggable
        onDragStart={handleOnDrag}
        className="task"
        style={{
          margin: 10,
        }}
      >
        <p className="task-title heading-M">{task.title}</p>
      </div>
    </div>
  );
}
