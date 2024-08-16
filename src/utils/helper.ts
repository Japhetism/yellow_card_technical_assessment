import { IItem } from '../types';

export const getCartValue = (cartItems: IItem[]): number =>
  cartItems.reduce((sum: number, item: IItem) => sum + item.price, 0);
