import React, { useState, useEffect } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  // 🌙 theme state
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  // 💾 save todos & theme
  useEffect(() => localStorage.setItem("todos", JSON.stringify(todos)), [todos]);
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const addTodo = (task) => {
    if (task.trim() === "") return;
    setTodos([...todos, { text: task, completed: false }]);
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => setTodos(todos.filter((_, i) => i !== index));

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <div className={`app ${theme}`}>
      <div className="header">
        <h1>📝 My To-Do List</h1>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
      </div>
      <TodoInput onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </div>
  );
}

export default App;
