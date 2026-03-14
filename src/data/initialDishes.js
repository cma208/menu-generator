export const CATEGORY_ORDER = ['main_dish', 'appetizer', 'carte', 'beberage'];

export const initialDishes = [
  // Plato de Fondo
  { id: 'main_1', name: 'Sopa del día', category: 'main_dish', price: null, regular: true },
  { id: 'main_2', name: 'Arroz con pollo', category: 'main_dish', price: null, regular: true },
  { id: 'main_3', name: 'Lomo saltado', category: 'main_dish', price: null, regular: true },
  { id: 'main_4', name: 'Ají de gallina', category: 'main_dish', price: null, regular: true },

  // Entradas
  { id: 'app_1', name: 'Ensalada mixta', category: 'appetizer', price: 5, regular: true },
  { id: 'app_2', name: 'Papa a la huancaína', category: 'appetizer', price: 6, regular: true },
  { id: 'app_3', name: 'Causa limeña', category: 'appetizer', price: 7, regular: true },

  // A la Carta
  { id: 'carte_1', name: 'Ceviche especial', category: 'carte', price: 18, regular: true },
  { id: 'carte_2', name: 'Tiradito', category: 'carte', price: 16, regular: true },
  { id: 'carte_3', name: 'Arroz con mariscos', category: 'carte', price: 20, regular: true },

  // Bebidas
  { id: 'bev_1', name: 'Chicha morada', category: 'beberage', price: 3, regular: true },
  { id: 'bev_2', name: 'Limonada', category: 'beberage', price: 3.5, regular: true },
  { id: 'bev_3', name: 'Agua mineral', category: 'beberage', price: 2, regular: true },
];

export function groupByCategory(dishes) {
  return CATEGORY_ORDER.reduce((acc, category) => {
    const group = dishes.filter((d) => d.category === category);
    if (group.length > 0) acc[category] = group;
    return acc;
  }, {});
}
