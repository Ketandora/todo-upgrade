import React from "react";
import TodoItem from "./TodoItem_old";

export default function Todos({ todos, onDelete }) {
  return (
    <div>
      <h3  >Todos-List</h3>
      {todos.length === 0 ?
        <p className="text-center" >"No Todos"</p>
        : todos.map((todo) => (
            <div className="text-center">
                <TodoItem key={todo.sno} todo={todo} onDelete={onDelete} />
            </div>
          ))}
    </div>
  );
}