import React from "react";

const TodoItem = ({ todo, onDelete }) => {
  return (
    <div className="card my-2 p-2">
      <h5>{todo.title}</h5>
      <p>{todo.desc}</p>

      <button
        className="btn btn-danger btn-sm"
        onClick={() => onDelete(todo)}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;