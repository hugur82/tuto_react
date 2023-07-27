import { useState } from "react";
import "./App.css";
import InputText from "./components/InputText";

function App() {
  const [todo, setTodo] = useState([]);
  const addToList = (val) => {
    setTodo((prev) => {
      return [...prev, val];
    });
  };

  const deleteTodo = () => {
    alert("hello");
  };

  const showList = todo.map((el) => <li onClick={deleteTodo}>{el}</li>);
  return (
    <div className="App">
      <header className="App-header">
        <InputText list={addToList} />
        <ul>{showList}</ul>
      </header>
    </div>
  );
}

export default App;
