const TaskItem = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <input 
        type="checkbox" 
        checked={task.completed} 
        onChange={() => onToggle(task.id)} 
      />
      <span>{task.title}</span>
      <small>({task.created_at})</small>
      <button onClick={() => onDelete(task.id)}>Supprimer</button>
    </div>
  );
};

export default TaskItem;