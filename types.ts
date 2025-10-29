export enum FoodType {
  VEG = 'VEG',
  NON_VEG = 'NON_VEG',
  EGG = 'EGG',
}

export interface MenuItem {
  name: string;
  price: number | string;
  type?: FoodType;
  description?: string;
}

export interface MenuSubCategory {
  subCategory: string;
  items: MenuItem[];
}

export interface MenuCategory {
  name: string;
  image: string;
  items: (MenuItem | MenuSubCategory)[];
}
