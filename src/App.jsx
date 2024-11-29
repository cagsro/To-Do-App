import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <div className="left-side">
        <h2>Yeni Görev Ekle</h2>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Görev girin"
        />
        <button onClick={handleAddTask}>Ekle</button>
      </div>
      
      {/* Orta çizgi */}
      <div className="line"></div>
      
      <div className="right-side">
        <h2>Görev Listesi</h2>
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className="task-item">
              {task}
              <button onClick={() => handleDeleteTask(index)} className="delete-btn">
                Sil
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
