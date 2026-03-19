import { useState } from 'react';
import { CATEGORY_ORDER } from '../../data/initialDishes.js';
import { SPANISH_CONNECTORS } from '../../data/spanishConnectors.js';

function toTitleCase(str) {
  return str
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .map((word, index) =>
      index === 0 || !SPANISH_CONNECTORS.includes(word)
        ? word.charAt(0).toUpperCase() + word.slice(1)
        : word
    )
    .join(' ');
}

const CATEGORY_LABELS = {
  main_dish: 'Plato de Fondo',
  appetizer: 'Entradas',
  carte: 'A la Carta',
  beverage: 'Bebidas',
};

const EMPTY_FORM = { name: '', category: '', price: '' };

export default function AddDishForm({ onAddDish }) {
  const [form, setForm] = useState(EMPTY_FORM);

  function handleChange({ target: { name, value } }) {
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name.trim() || !form.category) return;

    const newDish = {
      id: 'tmp_' + Date.now(),
      name: toTitleCase(form.name),
      category: form.category,
      price: form.category !== 'main_dish' && form.category !== 'appetizer' && form.price !== '' ? parseFloat(form.price) : null,
      regular: false,
      temporal: true,
    };

    onAddDish(newDish);
    setForm(EMPTY_FORM);
  }

  const showPrice = form.category !== '' && form.category !== 'main_dish' && form.category !== 'appetizer';

  return (
    <form className="add-dish-form" onSubmit={handleSubmit}>
      <h3 className="add-dish-heading">Agregar plato temporal</h3>
      <div className="form-field">
        <label htmlFor="add-category">Categoría</label>
        <select
          id="add-category"
          name="category"
          value={form.category}
          onChange={handleChange}
        >
          <option value="" disabled>Seleccionar categoría</option>
          {CATEGORY_ORDER.map((cat) => (
            <option key={cat} value={cat}>
              {CATEGORY_LABELS[cat]}
            </option>
          ))}
        </select>
      </div>
      <div className="form-field">
        <label htmlFor="add-name">Nombre</label>
        <input
          id="add-name"
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Nombre del plato"
          disabled={!form.category}
        />
      </div>
      {showPrice && (
        <div className="form-field">
          <label htmlFor="add-price">Precio (S/.)</label>
          <input
            id="add-price"
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="0.00"
            min="0"
            step="0.5"
          />
        </div>
      )}
      <button type="submit" className="add-dish-btn">
        + Agregar al menú
      </button>
    </form>
  );
}
