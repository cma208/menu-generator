import DishCheckbox from './DishCheckbox.jsx';

const CATEGORY_LABELS = {
  main_dish: 'Plato de Fondo',
  appetizer: 'Entradas',
  carte: 'A la Carta',
  beverage: 'Bebidas',
};

export default function CategoryGroup({ category, dishes, activeIds, onToggle, isOpen, onOpen }) {
  return (
    <div className="category-group">
      <button className="category-toggle-btn" onClick={onOpen}>
        <h3 className="category-heading">{CATEGORY_LABELS[category]}</h3>
        <span className={`category-chevron${isOpen ? ' open' : ''}`}>▾</span>
      </button>
      {isOpen && (
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
      )}
    </div>
  );
}
