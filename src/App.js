import Header from "./components/Header";
import Board from "./components/Board";
import { columnData } from "./data";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(columnData));
  }, [columnData]);
  return (
    <div>
      <Header />
      <Board />
    </div>
  );
}

export default App;
