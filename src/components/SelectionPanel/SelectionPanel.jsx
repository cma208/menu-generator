import { CATEGORY_ORDER, groupByCategory } from '../../data/initialDishes.js';
import CategoryGroup from './CategoryGroup.jsx';
import AddDishForm from './AddDishForm.jsx';

export default function SelectionPanel({ dishes, activeIds, onToggle, onAddDish }) {
  const grouped = groupByCategory(dishes);

  return (
    <aside className="selection-panel">
      <h2 className="panel-title">Seleccionar platos</h2>
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
