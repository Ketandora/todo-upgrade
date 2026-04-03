import React, { useState } from "react";
import Header from "./myComponents/Header";
import Todos from "./myComponents/Todos";
import Footer from "./myComponents/Footer";

function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const addTodo = () => {

    setLoading(true);

    setTimeout(() => {
      if (input.trim() === "") {
        setLoading(false);
        return;
      }

      const newTodo = {
        sno: Date.now(),
        title: input,
        desc: "User added task"
      };

      setTodos([...todos, newTodo]);
      setInput("");
      setLoading(false);

    }, 800); // to show its loading 
  };

  const onDelete = (todo) => {
    setTodos(todos.filter((e) => e !== todo));
  };

  return (
    <>
      <Header title="Todo App" />

      <div className="container my-3">

        <div className="d-flex gap-2">
          <input
            className="form-control"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter todo..."
          />
          <button className="btn btn-primary" onClick={addTodo}>
            Add
          </button>
        </div>

    
        {loading && <p className="text-primary mt-2">Adding todo...</p>}

        <Todos todos={todos} onDelete={onDelete} />

      </div>

      <Footer />
    </>
  );
}

export default App;