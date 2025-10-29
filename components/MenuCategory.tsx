import React from 'react';
import { MenuCategory, MenuItem as MenuItemType, MenuSubCategory } from '../types';
import { MenuItem } from './MenuItem';

interface MenuCategoryProps {
  category: MenuCategory;
}

const isSubCategory = (item: MenuItemType | MenuSubCategory): item is MenuSubCategory => {
  return (item as MenuSubCategory).subCategory !== undefined;
};

// Helper to render the title with the pink/white theme
const renderCategoryTitle = (name: string) => {
  const words = name.split(' ');
  if (words.length > 1) {
    const lastWord = words.pop();
    const firstWords = words.join(' ');
    return (
      <>
        {firstWords}{' '}
        <span className="text-pink-500">{lastWord}</span>
      </>
    );
  }
  return name;
};


export const MenuCategoryComponent: React.FC<MenuCategoryProps> = ({ category }) => {
  return (
    <section className="bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="relative h-40">
        <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase tracking-wider text-white text-center">
            {renderCategoryTitle(category.name)}
          </h2>
        </div>
      </div>
      <div className="p-4 md:p-6">
        {category.items.map((item, index) => {
          if (isSubCategory(item)) {
            return (
              <div key={`${item.subCategory}-${index}`} className="my-6">
                <h3 className="font-oswald text-2xl text-pink-500 font-semibold mb-3 border-b-2 border-pink-500/30 pb-2">
                  {item.subCategory}
                </h3>
                <div className="space-y-4">
                  {item.items.map((subItem, subIndex) => (
                    <MenuItem key={`${subItem.name}-${subIndex}`} item={subItem} />
                  ))}
                </div>
              </div>
            );
          } else {
            return <MenuItem key={`${item.name}-${index}`} item={item as MenuItemType} />;
          }
        })}
      </div>
    </section>
  );
};