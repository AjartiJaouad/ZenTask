const Filter = ({ currentFilter, onFilterChange }) => {
  return (
    <div className="filter-buttons">
      <button 
        className={currentFilter === 'all' ? 'active' : ''} 
        onClick={() => onFilterChange('all')}
      >
        Toutes
      </button>
      <button 
        className={currentFilter === 'active' ? 'active' : ''} 
        onClick={() => onFilterChange('active')}
      >
        En cours
      </button>
      <button 
        className={currentFilter === 'completed' ? 'active' : ''} 
        onClick={() => onFilterChange('completed')}
      >
        Terminées
      </button>
    </div>
  );
};

export default Filter;