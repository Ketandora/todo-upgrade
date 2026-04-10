import React from "react";

export default function TodoItem({ todo, onDelete }) {
  return (
    <div className="card my-3 shadow-sm">
      <div className="card-body" >
      <h4 className="card-title" >{todo.title}</h4>
      <p className="card-text" >{todo.desc}</p>

      <button className="btn btn-sm btn-danger" key="sno" onClick={() => onDelete(todo)}>
        Delete
      </button>
      </div>
    </div>
  );
}