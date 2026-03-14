import { useRef } from 'react';
import { groupByCategory } from '../../data/initialDishes.js';
import MenuHeader from './MenuHeader.jsx';
import MenuSection from './MenuSection.jsx';
import ExportButtons from './ExportButtons.jsx';

const SOLO_CATEGORIES = ['carte', 'beberage'];

export default function MenuPreview({ activeDishes }) {
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
          <>
            {hasPaired && (
              <div className="menu-paired-block">
                <h2 className="menu-paired-title">Menú del Día</h2>
                <div className="menu-columns-row">
                  {grouped['main_dish'] && (
                    <MenuSection category="main_dish" dishes={grouped['main_dish']} />
                  )}
                  {grouped['appetizer'] && (
                    <MenuSection category="appetizer" dishes={grouped['appetizer']} />
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
        ) : (
          <p className="menu-empty">Selecciona platos para armar el menú.</p>
        )}
      </div>
      <ExportButtons menuRef={menuRef} />
    </main>
  );
}
