import { useState, useEffect } from 'react';
import TaskInput from './components/TaskInput.jsx';
import TaskList from './components/TaskList.jsx';
import Filter from './components/Filter';
import './App.css';

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('zen-tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // 1. Nouvel état pour savoir quel filtre est actif
  const [filter, setFilter] = useState('all'); 

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

  // 2. Logique de filtrage : on crée une liste filtrée avant l'affichage
  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'active') return !task.completed;
    return true; // pour 'all'
  });

  return (
    <div className="App">
      <h1>ZenTask 🧘‍♂️</h1>
      <TaskInput onAddTask={addTask} />
      
      {/* 3. On affiche le composant de filtre */}
      <Filter currentFilter={filter} onFilterChange={setFilter} />
      
      {/* 4. IMPORTATION CRUCIALE : On donne filteredTasks au lieu de tasks */}
      <TaskList tasks={filteredTasks} onDelete={deleteTask} onToggle={toggleTask} />
    </div>
  );
}

export default App;