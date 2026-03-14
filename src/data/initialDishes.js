export const CATEGORY_ORDER = ['appetizer','main_dish', 'carte', 'beberage'];

export const initialDishes = [
  // Fondos
  { id: 'main_1', name: 'Arroz con pollo', category: 'main_dish', price: null, regular: true },
  { id: 'main_2', name: 'Lomo saltado', category: 'main_dish', price: null, regular: true },
  { id: 'main_3', name: 'Ají de gallina', category: 'main_dish', price: null, regular: true },
  { id: 'main_4', name: 'Frejol con Seco a la Norteña', category: 'main_dish', price: null, regular: true },
  { id: 'main_5', name: 'Frejol con Pescado', category: 'main_dish', price: null, regular: true },
  { id: 'main_6', name: 'Sudado de pescado', category: 'main_dish', price: null, regular: true },
  { id: 'main_7', name: 'Carapulcra', category: 'main_dish', price: null, regular: true },
  { id: 'main_8', name: 'Pescado a la Plancha', category: 'main_dish', price: null, regular: true },
  { id: 'main_9', name: 'Tallarin Saltado', category: 'main_dish', price: null, regular: true },
  { id: 'main_10', name: 'Pollo Saltado', category: 'main_dish', price: null, regular: true },
  { id: 'main_11', name: 'Lomo Saltado', category: 'main_dish', price: null, regular: true },
  { id: 'main_12', name: 'Pollo en Salsa de Champiñones', category: 'main_dish', price: null, regular: true },
  { id: 'main_13', name: 'Hígado Encebollado', category: 'main_dish', price: null, regular: true },

  // Entradas
  { id: 'app_1', name: 'Ensalada Mixta', category: 'appetizer', price: null, regular: true },
  { id: 'app_2', name: 'Papa a la Huancaína', category: 'appetizer', price: null, regular: true },
  { id: 'app_3', name: 'Causa Limeña', category: 'appetizer', price: null, regular: true },
  { id: 'app_4', name: 'Caldo de Gallina', category: 'appetizer', price: null, regular: true },
  { id: 'app_5', name: 'Aguadito de Pollo', category: 'appetizer', price: null, regular: true },
  { id: 'app_6', name: 'Crema de Zapallo', category: 'appetizer', price: null, regular: true },
  { id: 'app_7', name: 'Sopa de Menestrón', category: 'appetizer', price: null, regular: true },

  // A la Carta
  { id: 'carte_1', name: 'Picante de Cuy', category: 'carte', price: 40, regular: true },
  { id: 'carte_2', name: 'Tacu Tacu con Lomo', category: 'carte', price: 20, regular: true },
  { id: 'carte_3', name: 'Bistec a lo Pobre', category: 'carte', price: 20, regular: true },
  { id: 'carte_4', name: 'Tallarin a la Huancaína con Lomo', category: 'carte', price: 20, regular: true },
  { id: 'carte_5', name: 'Trucha Frita', category: 'carte', price: 18, regular: true },
  { id: 'carte_6', name: 'Milanesa', category: 'carte', price: 18, regular: true },
  { id: 'carte_7', name: 'Milanesa a lo Pobre', category: 'carte', price: 23, regular: true },

  // Bebidas
  { id: 'bev_1', name: 'Café', category: 'beberage', price: 5, regular: true },
  { id: 'bev_2', name: 'Gaseosa Personal', category: 'beberage', price: 4, regular: true },
  { id: 'bev_4', name: 'Gordita', category: 'beberage', price: 6, regular: true },
  { id: 'bev_3', name: 'Agua Mineral', category: 'beberage', price: 4, regular: true },
  { id: 'bev_5', name: 'Gaseosa 1.5L', category: 'beberage', price: 10, regular: true },
  // { id: 'bev_6', name: 'Emoliente', category: 'beberage', price: 2.5, regular: true },
  // { id: 'bev_7', name: 'Pisco sour', category: 'beberage', price: 12, regular: true },
];

export function groupByCategory(dishes) {
  return CATEGORY_ORDER.reduce((acc, category) => {
    const group = dishes.filter((d) => d.category === category);
    if (group.length > 0) acc[category] = group;
    return acc;
  }, {});
}
