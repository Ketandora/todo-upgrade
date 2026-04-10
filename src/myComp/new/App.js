import React, { useState } from "react";
import Header from "./Header";
import Todos from "./Todos";
import Footer from "./Footer";

function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const addTodo = () => {

    

   
      if (input.trim() === "") {
        setLoading(false);
        alert("Nothing entered")
        return;
      }
      setLoading(true);
 setTimeout(() => {
      const newTodo = {
        sno: Date.now(),
        title: input,
        desc: "User added task"
      };

      setTodos([...todos, newTodo]);// does old array + new elements as react needs new refrence
      setInput("");
      setLoading(false);

    }, 800); // to show its loading 
  };

  const onDelete = (todo) => {
    setTodos(todos.filter((e) => e !== todo));
  };

  return (
    <div>
      <Header title="Todo App" />

      <div className="container my-3">

        <div className="d-flex gap-2">
          <input
            className="form-control"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter todo..."
          />
          <button className="btn btn-success" onClick={addTodo}>
            Add
          </button>
        </div>
        {loading && <p className="text-primary mt-2">Adding todo...</p>}

        <Todos todos={todos} onDelete={onDelete} />

      </div>
    </div>
  );
}
export default App;
