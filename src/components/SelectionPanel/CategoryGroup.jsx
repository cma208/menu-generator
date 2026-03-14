import DishCheckbox from './DishCheckbox.jsx';

const CATEGORY_LABELS = {
  main_dish: 'Plato de Fondo',
  appetizer: 'Entradas',
  carte: 'A la Carta',
  beberage: 'Bebidas',
};

export default function CategoryGroup({ category, dishes, activeIds, onToggle }) {
  return (
    <div className="category-group">
      <h3 className="category-heading">{CATEGORY_LABELS[category]}</h3>
      <div className="dish-list">
        {dishes.map((dish) => (
          <DishCheckbox
            key={dish.id}
            dish={dish}
            checked={activeIds.has(dish.id)}
            onToggle={onToggle}
          />
        ))}
      </div>
    </div>
  );
}
