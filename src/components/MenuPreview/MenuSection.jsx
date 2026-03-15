const CATEGORY_LABELS = {
  main_dish: 'Fondos',
  appetizer: 'Entradas',
  carte: 'A la Carta',
  beberage: 'Bebidas',
};

const MENU_FIXED_PRICE = 'S/.17';

export default function MenuSection({ category, dishes, centered, showPrice }) {
  const hasNoPrice = category === 'main_dish' || category === 'appetizer';

  return (
    <section className="menu-section">
      <h2 className="menu-section-title">{CATEGORY_LABELS[category]}</h2>
      <div className={`menu-items${centered ? ' menu-items--centered' : ''}`}>
        {dishes.map((dish) => (
          <div key={dish.id} className="menu-item">
            {hasNoPrice ? (
              <span className="menu-item-name">{dish.name}</span>
            ) : (
              <>
                <span className="menu-item-name">{dish.name}</span>
                <span className="menu-item-dots" aria-hidden="true" />
                <span className="menu-item-price">
                  S/.{dish.price != null ? dish.price.toFixed(2) : '—'}
                </span>
              </>
            )}
          </div>
        ))}
      </div>
      {showPrice && (
        <div className="menu-fixed-price-row">
          <span className="menu-fixed-price">{MENU_FIXED_PRICE}</span>
        </div>
      )}
    </section>
  );
}
