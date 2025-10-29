import React, { useRef, useEffect } from 'react';

interface CategoryTabsProps {
  categories: string[];
  activeCategory: string;
  onTabClick: (categoryName: string) => void;
}

export const CategoryTabs: React.FC<CategoryTabsProps> = ({ categories, activeCategory, onTabClick }) => {
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (activeTabRef.current && tabsContainerRef.current) {
      const tab = activeTabRef.current;
      const container = tabsContainerRef.current;
      
      const containerRect = container.getBoundingClientRect();
      const tabRect = tab.getBoundingClientRect();

      // Calculate the target scroll position to center the active tab
      const targetScrollLeft = 
        container.scrollLeft + 
        (tabRect.left - containerRect.left) - 
        (containerRect.width / 2) + 
        (tabRect.width / 2);

      // Apply the smooth scroll
      container.scrollTo({
        left: targetScrollLeft,
        behavior: 'smooth',
      });
    }
  }, [activeCategory]);
  
  return (
    <div className="sticky top-0 bg-white/90 backdrop-blur-sm z-10 py-3 mb-6 shadow-md">
      <div className="container mx-auto px-4">
        <div ref={tabsContainerRef} className="flex space-x-3 overflow-x-auto category-tabs pb-2">
          {categories.map((category) => (
            <button
              key={category}
              ref={category === activeCategory ? activeTabRef : null}
              onClick={() => onTabClick(category)}
              className={`whitespace-nowrap font-oswald uppercase tracking-wide px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ease-in-out ${
                activeCategory === category
                  ? 'bg-pink-600 text-white shadow-md'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};