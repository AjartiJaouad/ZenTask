import { useState } from 'react';

const TaskInput = ({ onAddTask }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onAddTask(title);
      setTitle(''); // On vide le champ après l'ajout
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-input">
      <input 
        type="text" 
        placeholder="Ajouter une tâche..." 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default TaskInput;