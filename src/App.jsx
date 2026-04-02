import { useState, useEffect } from 'react'; // On ajoute useEffect
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  // 1. On initialise avec ce qu'il y a dans le localStorage (ou un tableau vide)
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('zen-tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // 2. À chaque fois que la liste 'tasks' change, on sauvegarde
  useEffect(() => {
    localStorage.setItem('zen-tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title: title,
      completed: false,
      created_at: new Date().toLocaleDateString()
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="App">
      <h1>ZenTask </h1>
      <TaskInput onAddTask={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleTask} />
    </div>
  );
}

export default App;