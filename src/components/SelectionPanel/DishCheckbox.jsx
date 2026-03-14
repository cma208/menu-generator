export default function DishCheckbox({ dish, checked, onToggle }) {
  const { id, name, price, temporal } = dish;

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
      {temporal && <span className="badge-temporal">temporal</span>}
    </label>
  );
}
