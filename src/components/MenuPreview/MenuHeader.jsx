const RESTAURANT_NAME = 'Carito Ardiles';
const RESTAURANT_ADDRESS = 'Avenida principal 410, Surquillo';
const RESTAURANT_HOURS = 'Horario de atención: Lunes - Sábado / 12 - 5pm';

export default function MenuHeader() {
  return (
    <header className="menu-header">
      <h1 className="restaurant-name">{RESTAURANT_NAME}</h1>
      <hr className="menu-divider" />
      <p className="restaurant-address">{RESTAURANT_ADDRESS}</p>
      <p className="restaurant-hours">{RESTAURANT_HOURS}</p>
      <hr className="menu-divider" />
    </header>
  );
}
