import React, { useState } from "react";

function TodoInput({ onAdd }) {
  const [task, setTask] = useState("");

  const handleAdd = () => {
    if (task.trim() === "") return;
    onAdd(task);
    setTask("");
  };

  return (
    <div className="input-section">
      <input
        type="text"
        placeholder="💡 Add a new task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAdd}>Add ✨</button>
    </div>
  );
}

export default TodoInput;
