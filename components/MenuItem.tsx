import React from 'react';
import { MenuItem as MenuItemType, FoodType } from '../types';
import { VegIcon, NonVegIcon, EggIcon } from './Icons';

interface MenuItemProps {
  item: MenuItemType;
}

const FoodTypeIcon: React.FC<{ type?: FoodType }> = ({ type }) => {
  if (!type) return null;
  switch (type) {
    case FoodType.VEG:
      return <VegIcon />;
    case FoodType.NON_VEG:
      return <NonVegIcon />;
    case FoodType.EGG:
      return <EggIcon />;
    default:
      return null;
  }
};

export const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  return (
    <div className="py-3 border-b border-gray-200 last:border-b-0">
      <div className="flex items-start justify-between">
        <div className="flex items-start">
          <div className="w-6 pt-1">
             <FoodTypeIcon type={item.type} />
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 text-base">{item.name}</h4>
            {item.description && (
              <p className="text-sm text-gray-500">{item.description}</p>
            )}
          </div>
        </div>
        <p className="font-semibold text-pink-500 text-base whitespace-nowrap pl-4">
          {typeof item.price === 'number' ? `₹${item.price}` : item.price}
        </p>
      </div>
    </div>
  );
};