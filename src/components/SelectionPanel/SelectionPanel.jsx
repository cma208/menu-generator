import { CATEGORY_ORDER, groupByCategory } from '../../data/initialDishes.js';
import CategoryGroup from './CategoryGroup.jsx';
import AddDishForm from './AddDishForm.jsx';

export default function SelectionPanel({ dishes, activeIds, onToggle, onAddDish, menuLayout, onToggleLayout }) {
  const grouped = groupByCategory(dishes);

  return (
    <aside className="selection-panel">
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
          />
        ) : null
      )}
      <AddDishForm onAddDish={onAddDish} />
    </aside>
  );
}
