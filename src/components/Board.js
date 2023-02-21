import React from "react";
import { useSelector } from "react-redux";
import Column from "./Column";

export default function Board() {
  const columns = useSelector((state) => state.boards);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
      className={"board "}
    >
      {columns.map((col, index) => {
        return <Column key={index} colIndex={index} />;
      })}
    </div>
  );
}
