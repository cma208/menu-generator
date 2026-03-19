export const CATEGORY_ORDER = ['appetizer','main_dish', 'carte', 'beverage'];

// Weights 1–4 only for permanent dishes. Weight 5 is reserved for temporal (user-added) dishes.
export const initialDishes = [
  // Fondos
  { id: 'main_1', name: 'Arroz a la Cubana', category: 'main_dish', price: null, regular: true, weight: 2 },
  { id: 'main_2', name: 'Pollo a la Plancha', category: 'main_dish', price: null, regular: true, weight: 1 },
  { id: 'main_3', name: 'Pescado a la Plancha', category: 'main_dish', price: null, regular: true, weight: 1 },
  { id: 'main_4', name: 'Lomo Saltado', category: 'main_dish', price: null, regular: true, weight: 1 },
  { id: 'main_5', name: 'Tallarín Saltado', category: 'main_dish', price: null, regular: true, weight: 1 },
  { id: 'main_6', name: 'Pollo Saltado', category: 'main_dish', price: null, regular: true, weight: 1 },
  { id: 'main_7', name: 'Ají de Gallina', category: 'main_dish', price: null, regular: false, weight: 4 },
  { id: 'main_8', name: 'Frejol con Seco a la Norteña', category: 'main_dish', price: null, regular: false, weight: 2 },
  { id: 'main_9', name: 'Frejol con Pescado', category: 'main_dish', price: null, regular: false, weight: 2 },
  { id: 'main_10', name: 'Sudado de Pescado', category: 'main_dish', price: null, regular: false, weight: 4 },
  { id: 'main_11', name: 'Arroz con Pollo', category: 'main_dish', price: null, regular: false, weight: 3 },
  { id: 'main_12', name: 'Carapulcra', category: 'main_dish', price: null, regular: false, weight: 4 },
  { id: 'main_13', name: 'Pollo en Salsa de Champiñones', category: 'main_dish', price: null, regular: false, weight: 4 },
  { id: 'main_14', name: 'Hígado Encebollado', category: 'main_dish', price: null, regular: false, weight: 4 },
  { id: 'main_15', name: 'Tallarín Verde con Churrasco', category: 'main_dish', price: null, regular: false, weight: 4 },
  { id: 'main_16', name: 'Pollo al Sillao', category: 'main_dish', price: null, regular: false, weight: 4 },
  { id: 'main_17', name: 'Lentejas con Pescado', category: 'main_dish', price: null, regular: false, weight: 4 },
  { id: 'main_18', name: 'Picante de Carne', category: 'main_dish', price: null, regular: false, weight: 4 },
  { id: 'main_19', name: 'Escabeche de Pollo', category: 'main_dish', price: null, regular: false, weight: 4 },
  { id: 'main_20', name: 'Arroz con Chancho', category: 'main_dish', price: null, regular: false, weight: 4 },
  { id: 'main_21', name: 'Seco de Pollo', category: 'main_dish', price: null, regular: false, weight: 4 },
  { id: 'main_22', name: 'Locro de Zapallo con Chuleta', category: 'main_dish', price: null, regular: false, weight: 4 },
  { id: 'main_23', name: 'Ajíaco de Olluco con Churrasco', category: 'main_dish', price: null, regular: false, weight: 4 },
  { id: 'main_24', name: 'Puré con Pollo a la Olla', category: 'main_dish', price: null, regular: false, weight: 4 },
  { id: 'main_25', name: 'Puré con Albóndiga', category: 'main_dish', price: null, regular: false, weight: 4 },
  { id: 'main_26', name: 'Macarrones con Carne Molida', category: 'main_dish', price: null, regular: false, weight: 4 },
  { id: 'main_27', name: 'Quinua con Lomo al Jugo', category: 'main_dish', price: null, regular: false, weight: 4 },
  { id: 'main_28', name: 'Tallarín Rojo con Pollo', category: 'main_dish', price: null, regular: false, weight: 4 },
  { id: 'main_29', name: 'Pescado en Salsa de Champiñones', category: 'main_dish', price: null, regular: false, weight: 4 },
  { id: 'main_30', name: 'Pescado en Salsa de Mariscos', category: 'main_dish', price: null, regular: false, weight: 4 },
  { id: 'main_31', name: 'Pollo al Horno con Ensalada Rusa', category: 'main_dish', price: null, regular: false, weight: 4 },
  { id: 'main_32', name: 'Cau-Cau', category: 'main_dish', price: null, regular: false, weight: 4 },
  { id: 'main_33', name: 'Alverjita Verde con Pescado', category: 'main_dish', price: null, regular: false, weight: 4 },

  // Entradas
  { id: 'app_1', name: 'Ensalada Mixta', category: 'appetizer', price: null, regular: true, weight: 1 },
  { id: 'app_2', name: 'Tamal Criollo', category: 'appetizer', price: null, regular: true, weight: 1 },
  { id: 'app_3', name: 'Choclo con Queso', category: 'appetizer', price: null, regular: true, weight: 1 },
  { id: 'app_4', name: 'Papa a la Huancaína', category: 'appetizer', price: null, regular: false, weight: 3 },
  { id: 'app_5', name: 'Causa Limeña', category: 'appetizer', price: null, regular: false, weight: 4 },
  { id: 'app_6', name: 'Caldo de Gallina', category: 'appetizer', price: null, regular: false, weight: 4 },
  { id: 'app_7', name: 'Aguadito de Pollo', category: 'appetizer', price: null, regular: false, weight: 4 },
  { id: 'app_8', name: 'Crema de Zapallo', category: 'appetizer', price: null, regular: false, weight: 4 },
  { id: 'app_9', name: 'Menestrón', category: 'appetizer', price: null, regular: false, weight: 4 },
  { id: 'app_10', name: 'Sancochado', category: 'appetizer', price: null, regular: false, weight: 4 },
  { id: 'app_11', name: 'Crema de Rocoto', category: 'appetizer', price: null, regular: false, weight: 4 },
  { id: 'app_12', name: 'Papa Rellena', category: 'appetizer', price: null, regular: false, weight: 4 },
  { id: 'app_13', name: 'Salpicón de Pollo', category: 'appetizer', price: null, regular: false, weight: 4 },
  { id: 'app_14', name: 'Huevo a la Rusa', category: 'appetizer', price: null, regular: false, weight: 4 },
  { id: 'app_15', name: 'Sopa de Sémola', category: 'appetizer', price: null, regular: false, weight: 4 },
  { id: 'app_16', name: 'Chupe de Pescado', category: 'appetizer', price: null, regular: false, weight: 4 },

  // A la Carta
  { id: 'carte_1', name: 'Picante de Cuy', category: 'carte', price: 43, regular: true, weight: 1 },
  { id: 'carte_2', name: 'Bistec a lo Pobre', category: 'carte', price: 23, regular: true, weight: 1 },
  { id: 'carte_3', name: 'Trucha Frita', category: 'carte', price: 20, regular: true, weight: 1 },
  { id: 'carte_4', name: 'Milanesa', category: 'carte', price: 20, regular: true, weight: 1 },
  { id: 'carte_5', name: 'Milanesa a lo Pobre', category: 'carte', price: 23, regular: true, weight: 1 },
  { id: 'carte_6', name: 'Tacu Tacu con Lomo', category: 'carte', price: 20, regular: false, weight: 1 },
  { id: 'carte_7', name: 'Tallarín a la Huancaína con Lomo', category: 'carte', price: 23, regular: false, weight: 1 },

  // Bebidas
  { id: 'bev_1', name: 'Café', category: 'beverage', price: 5, regular: true, weight: 1 },
  { id: 'bev_2', name: 'Gaseosa Personal', category: 'beverage', price: 4, regular: true, weight: 1 },
  { id: 'bev_4', name: 'Gordita', category: 'beverage', price: 6, regular: true, weight: 1 },
  { id: 'bev_3', name: 'Agua Mineral', category: 'beverage', price: 4, regular: false, weight: 1 },
  { id: 'bev_5', name: 'Gaseosa 1.5L', category: 'beverage', price: 10, regular: true, weight: 1 },
];

export function groupByCategory(dishes) {
  return CATEGORY_ORDER.reduce((acc, category) => {
    const group = dishes
      .filter((d) => d.category === category)
      .sort((a, b) => {
        const weightA = a.temporal ? 5 : (a.weight ?? 1);
        const weightB = b.temporal ? 5 : (b.weight ?? 1);
        return weightB - weightA; // descending: 5 = top, 1 = bottom
      });
    if (group.length > 0) acc[category] = group;
    return acc;
  }, {});
}
