import React, { useState, useRef, useEffect } from 'react';
import { MENU_DATA } from './constants';
import { MenuCategory, MenuItem, MenuSubCategory, FoodType } from './types';
import { Header } from './components/Header';
import { CategoryTabs } from './components/CategoryTabs';
import { MenuCategoryComponent } from './components/MenuCategory';
import { Footer } from './components/Footer';
import { QRCodeModal } from './components/QRCodeModal';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(MENU_DATA[0]?.name || '');
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);
  const categoryRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveCategory(id);
          }
        });
      },
      { rootMargin: '-40% 0px -60% 0px', threshold: 0.1 }
    );

    const refs = categoryRefs.current;
    // FIX: Replaced `Object.values` with `Object.keys` to iterate over refs.
    // This resolves a TypeScript error where the ref was inferred as `unknown`.
    Object.keys(refs).forEach((key) => {
      const ref = refs[key];
      if (ref) observer.observe(ref);
    });

    return () => {
      const refs = categoryRefs.current;
      // FIX: Replaced `Object.values` with `Object.keys` for consistency and to avoid the same type error on cleanup.
      Object.keys(refs).forEach((key) => {
        const ref = refs[key];
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const handleTabClick = (categoryName: string) => {
    categoryRefs.current[categoryName]?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    setActiveCategory(categoryName);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <CategoryTabs
        categories={MENU_DATA.map((c) => c.name)}
        activeCategory={activeCategory}
        onTabClick={handleTabClick}
      />
      <main className="container mx-auto px-4 pb-24">
        <div className="space-y-12">
          {MENU_DATA.map((category) => (
            <div
              key={category.name}
              id={category.name}
              // FIX: The ref callback must return void. An assignment expression returns the assigned value. Wrapping the assignment in curly braces creates a function body that doesn't return a value, satisfying the type requirement.
              ref={(el) => {
                categoryRefs.current[category.name] = el;
              }}
            >
              <MenuCategoryComponent category={category} />
            </div>
          ))}
        </div>
      </main>
      <Footer onQrClick={() => setIsQrModalOpen(true)} />
      <QRCodeModal isOpen={isQrModalOpen} onClose={() => setIsQrModalOpen(false)} />
    </div>
  );
};

export default App;