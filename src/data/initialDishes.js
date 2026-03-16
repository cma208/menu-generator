export const CATEGORY_ORDER = ['appetizer','main_dish', 'carte', 'beberage'];

export const initialDishes = [
  // Fondos
  { id: 'main_1', name: 'Arroz a la Cubana', category: 'main_dish', price: null, regular: true },
  { id: 'main_2', name: 'Pollo a la Plancha', category: 'main_dish', price: null, regular: true },
  { id: 'main_3', name: 'Pescado a la Plancha', category: 'main_dish', price: null, regular: true },
  { id: 'main_4', name: 'Lomo Saltado', category: 'main_dish', price: null, regular: true },
  { id: 'main_5', name: 'Tallarin Saltado', category: 'main_dish', price: null, regular: true },
  { id: 'main_6', name: 'Pollo Saltado', category: 'main_dish', price: null, regular: true },
  { id: 'main_7', name: 'Ají de Gallina', category: 'main_dish', price: null, regular: false },
  { id: 'main_8', name: 'Frejol con Seco a la Norteña', category: 'main_dish', price: null, regular: false },
  { id: 'main_9', name: 'Frejol con Pescado', category: 'main_dish', price: null, regular: false },
  { id: 'main_10', name: 'Sudado de Pescado', category: 'main_dish', price: null, regular: false },
  { id: 'main_11', name: 'Arroz con Pollo', category: 'main_dish', price: null, regular: false },
  { id: 'main_12', name: 'Carapulcra', category: 'main_dish', price: null, regular: false },
  { id: 'main_13', name: 'Pollo en Salsa de Champiñones', category: 'main_dish', price: null, regular: false },
  { id: 'main_14', name: 'Hígado Encebollado', category: 'main_dish', price: null, regular: false },
  { id: 'main_15', name: 'Tallarin Verde Con Churrasco', category: 'main_dish', price: null, regular: false },
  { id: 'main_16', name: 'Pollo al Sillao', category: 'main_dish', price: null, regular: false },
  { id: 'main_17', name: 'Lentejas con Pescado', category: 'main_dish', price: null, regular: false },
  
  // Entradas
  { id: 'app_1', name: 'Ensalada Mixta', category: 'appetizer', price: null, regular: true },
  { id: 'app_2', name: 'Tamal Criollo', category: 'appetizer', price: null, regular: true },
  { id: 'app_3', name: 'Choclo con Queso', category: 'appetizer', price: null, regular: true },
  { id: 'app_4', name: 'Papa a la Huancaína', category: 'appetizer', price: null, regular: false },
  { id: 'app_5', name: 'Causa Limeña', category: 'appetizer', price: null, regular: false },
  { id: 'app_6', name: 'Caldo de Gallina', category: 'appetizer', price: null, regular: false },
  { id: 'app_7', name: 'Aguadito de Pollo', category: 'appetizer', price: null, regular: false },
  { id: 'app_8', name: 'Crema de Zapallo', category: 'appetizer', price: null, regular: false },
  { id: 'app_9', name: 'Sopa de Menestrón', category: 'appetizer', price: null, regular: false },
  { id: 'app_10', name: 'Sancochado', category: 'appetizer', price: null, regular: false },
  { id: 'app_11', name: 'Crema de Rocoto', category: 'appetizer', price: null, regular: false },

  // A la Carta
  { id: 'carte_1', name: 'Picante de Cuy', category: 'carte', price: 43, regular: true },
  { id: 'carte_2', name: 'Bistec a lo Pobre', category: 'carte', price: 23, regular: true },
  { id: 'carte_3', name: 'Trucha Frita', category: 'carte', price: 20, regular: true },
  { id: 'carte_4', name: 'Milanesa', category: 'carte', price: 20, regular: true },
  { id: 'carte_5', name: 'Milanesa a lo Pobre', category: 'carte', price: 23, regular: true },
  { id: 'carte_6', name: 'Tacu Tacu con Lomo', category: 'carte', price: 20, regular: false },
  { id: 'carte_7', name: 'Tallarin a la Huancaína con Lomo', category: 'carte', price: 20, regular: false },

  // Bebidas
  { id: 'bev_1', name: 'Café', category: 'beberage', price: 5, regular: true },
  { id: 'bev_2', name: 'Gaseosa Personal', category: 'beberage', price: 4, regular: true },
  { id: 'bev_4', name: 'Gordita', category: 'beberage', price: 6, regular: true },
  { id: 'bev_3', name: 'Agua Mineral', category: 'beberage', price: 4, regular: false },
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
