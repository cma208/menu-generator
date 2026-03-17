import { useRef } from 'react';
import { CATEGORY_ORDER, groupByCategory } from '../../data/initialDishes.js';
import MenuHeader from './MenuHeader.jsx';
import MenuSection from './MenuSection.jsx';
import ExportButtons from './ExportButtons.jsx';

const SOLO_CATEGORIES = ['carte', 'beverage'];

export default function MenuPreview({ activeDishes, menuLayout }) {
  const menuRef = useRef();
  const grouped = groupByCategory(activeDishes);
  const hasContent = activeDishes.length > 0;
  const hasPaired = grouped['appetizer'] || grouped['main_dish'];

  return (
    <main className="menu-preview-wrapper">
      <div
        id="menu-preview-container"
        className="menu-preview-container"
        ref={menuRef}
      >
        <MenuHeader />
        {hasContent ? (
          menuLayout === 'list' ? (
            CATEGORY_ORDER.map((category) =>
              grouped[category] ? (
                <MenuSection
                  key={category}
                  category={category}
                  dishes={grouped[category]}
                  centered={category === 'main_dish' || category === 'appetizer'}
                  showPrice={category === 'main_dish'}
                />
              ) : null
            )
          ) : (
            <>
              {hasPaired && (
                <div className="menu-paired-block">
                  <h2 className="menu-paired-title">Menú del Día</h2>
                  <div className="menu-columns-row">
                    {grouped['main_dish'] && (
                      <MenuSection category="main_dish" dishes={grouped['main_dish']} />
                    )}
                    {grouped['appetizer'] && (
                      <MenuSection category="appetizer" dishes={grouped['appetizer']} showPrice />
                    )}
                  </div>
                </div>
              )}
              {SOLO_CATEGORIES.map((category) =>
                grouped[category] ? (
                  <MenuSection key={category} category={category} dishes={grouped[category]} />
                ) : null
              )}
            </>
          )
        ) : (
          <p className="menu-empty">Selecciona platos para armar el menú.</p>
        )}
      </div>
      <ExportButtons menuRef={menuRef} />
    </main>
  );
}
