import { useState } from 'react';
import { CATEGORY_ORDER, groupByCategory } from '../../data/initialDishes.js';
import CategoryGroup from './CategoryGroup.jsx';
import AddDishForm from './AddDishForm.jsx';

function normalize(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

export default function SelectionPanel({ dishes, activeIds, onToggle, onAddDish, menuLayout, onToggleLayout, isDarkMode, onToggleDarkMode }) {
  const [openCategory, setOpenCategory] = useState(CATEGORY_ORDER[0]);
  const [searchTerm, setSearchTerm] = useState('');

  const isSearching = searchTerm.trim().length > 0;

  const filteredDishes = isSearching
    ? dishes.filter(d => normalize(d.name).includes(normalize(searchTerm.trim())))
    : dishes;

  const grouped = groupByCategory(filteredDishes);

  return (
    <aside className="selection-panel">
      <div className="panel-sticky-header">
        <div className="panel-title-row">
          <h2 className="panel-title">Seleccionar platos</h2>
          <div className="layout-toggle">
            <button
              className={`layout-toggle-btn${menuLayout === 'paired' ? ' active' : ''}`}
              onClick={() => onToggleLayout('paired')}
              title="Vista columnas"
            >
              ⊟
            </button>
            <button
              className={`layout-toggle-btn${menuLayout === 'list' ? ' active' : ''}`}
              onClick={() => onToggleLayout('list')}
              title="Vista lista"
            >
              ≡
            </button>
            <button
              className="layout-toggle-btn"
              onClick={onToggleDarkMode}
              title={isDarkMode ? 'Modo claro' : 'Modo oscuro'}
            >
              {isDarkMode ? '☀' : '☾'}
            </button>
          </div>
        </div>
        <div className="search-bar">
          <input
            type="text"
            className="search-input"
            placeholder="Buscar plato..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {isSearching && (
            <button className="search-clear-btn" onClick={() => setSearchTerm('')} aria-label="Limpiar búsqueda">
              ×
            </button>
          )}
        </div>
      </div>
      {CATEGORY_ORDER.map((category) =>
        grouped[category] ? (
          <CategoryGroup
            key={category}
            category={category}
            dishes={grouped[category]}
            activeIds={activeIds}
            onToggle={onToggle}
            isOpen={isSearching ? true : openCategory === category}
            onOpen={() => setOpenCategory(prev => prev === category ? null : category)}
          />
        ) : null
      )}
      <AddDishForm onAddDish={onAddDish} />
    </aside>
  );
}
