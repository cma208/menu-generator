import { useState } from 'react';
import { initialDishes } from './data/initialDishes.js';
import SelectionPanel from './components/SelectionPanel/SelectionPanel.jsx';
import MenuPreview from './components/MenuPreview/MenuPreview.jsx';

export default function App() {
  const [dishes, setDishes] = useState(initialDishes);
  const [activeIds, setActiveIds] = useState(new Set(initialDishes.filter((d) => d.regular).map((d) => d.id)));
  const [menuLayout, setMenuLayout] = useState('paired');
  const [activeTab, setActiveTab] = useState('selection');

  function handleToggle(id) {
    setActiveIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  function handleAddDish(newDish) {
    setDishes((prev) => [...prev, newDish]);
    setActiveIds((prev) => new Set(prev).add(newDish.id));
  }

  const activeDishes = dishes.filter((d) => activeIds.has(d.id));

  return (
    <div className="app-layout" data-active-tab={activeTab}>
      <div className="mobile-tabs">
        <button
          className={`mobile-tab${activeTab === 'selection' ? ' mobile-tab--active' : ''}`}
          onClick={() => setActiveTab('selection')}
        >
          Selección
        </button>
        <button
          className={`mobile-tab${activeTab === 'preview' ? ' mobile-tab--active' : ''}`}
          onClick={() => setActiveTab('preview')}
        >
          Vista Previa
        </button>
      </div>
      <SelectionPanel
        dishes={dishes}
        activeIds={activeIds}
        onToggle={handleToggle}
        onAddDish={handleAddDish}
        menuLayout={menuLayout}
        onToggleLayout={setMenuLayout}
      />
      <MenuPreview activeDishes={activeDishes} menuLayout={menuLayout} />
    </div>
  );
}
