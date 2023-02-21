import React, { useState } from "react";
import { useDispatch } from "react-redux";
import boardsSlice from "../redux/boardsSlice";

export default function Header() {
  const dispatch = useDispatch();
  const [isValid, setIsValid] = useState(true);

  const newColIndex = 0;
  const validate = () => {
    setIsValid(false);
    if (!title.trim()) {
      return false;
    }

    setIsValid(true);
    return true;
  };
  const onSubmit = () => {
    dispatch(
      boardsSlice.actions.addTask({
        title,

        newColIndex,
      })
    );
  };

  const [title, setTitle] = useState("");

  return (
    <div className="header-container">
      <header>
        <div className="logo-container">
          <h3 className="logo-text">kanban</h3>{" "}
        </div>

        <div className="input-container">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="task-name-input"
            type="text"
            placeholder="Write your task"
            className={!isValid && !title.trim() ? "red-border" : ""}
          />
          {!isValid && !title.trim() && (
            <span className="cant-be-empty-span text-L"> Can't be empty</span>
          )}
        </div>
        <button
          onClick={() => {
            const isValid = validate();
            if (isValid) {
              onSubmit();
            }
          }}
          style={{
            margin: 10,
          }}
          className="add-task-btn"
        >
          Add Task
        </button>
      </header>
    </div>
  );
}
