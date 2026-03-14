import { useRef } from 'react';
import { CATEGORY_ORDER, groupByCategory } from '../../data/initialDishes.js';
import MenuHeader from './MenuHeader.jsx';
import MenuSection from './MenuSection.jsx';
import ExportButtons from './ExportButtons.jsx';

export default function MenuPreview({ activeDishes }) {
  const menuRef = useRef();
  const grouped = groupByCategory(activeDishes);
  const hasContent = activeDishes.length > 0;

  return (
    <main className="menu-preview-wrapper">
      <div
        id="menu-preview-container"
        className="menu-preview-container"
        ref={menuRef}
      >
        <MenuHeader />
        {hasContent ? (
          CATEGORY_ORDER.map((category) =>
            grouped[category] ? (
              <MenuSection
                key={category}
                category={category}
                dishes={grouped[category]}
              />
            ) : null
          )
        ) : (
          <p className="menu-empty">Selecciona platos para armar el menú.</p>
        )}
      </div>
      <ExportButtons menuRef={menuRef} />
    </main>
  );
}
