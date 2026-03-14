export default function DishCheckbox({ dish, checked, onToggle }) {
  const { id, name, price, regular } = dish;

  return (
    <label className="dish-checkbox">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => onToggle(id)}
      />
      <span className="dish-name">{name}</span>
      {price != null && (
        <span className="dish-price">S/.{price.toFixed(2)}</span>
      )}
      {!regular && <span className="badge-temporal">temporal</span>}
    </label>
  );
}
