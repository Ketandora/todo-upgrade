import React from "react";
import TodoItem from "./TodoItem";

export default function Todos({ todos, onDelete }) {
  return (
    <div className="mt-3">
      {todos.length === 0 ? (
        <h5 className="text-center text-muted">No Todos Available</h5>
      ) : (
        todos.map((todo) => (
          <TodoItem key={todo.sno} todo={todo} onDelete={onDelete} />
        ))
      )}

    </div>
  );
}