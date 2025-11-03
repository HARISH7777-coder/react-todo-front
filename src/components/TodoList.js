import React from "react";

function TodoList({ todos, onToggle, onDelete }) {
  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <li
          key={index}
          className={`todo-item ${todo.completed ? "done" : ""}`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <span onClick={() => onToggle(index)}>{todo.text}</span>
          <button className="delete-btn" onClick={() => onDelete(index)}>
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
