import { NewCart } from '..';
import { IAddress, IItem } from '../../types';

// create mock data for address
const mockAddress: IAddress = {
  street: 'Plot 23, Orchid Hotel Road',
  code: 1110001,
  province: 'Lagos',
  city: 'Eti-Osa',
};

// create mock data for items
const mockItems: IItem[] = [
  { name: 'Office Chair', price: 1000 },
  { name: 'Monitor', price: 500 },
  { name: 'Office Table', price: 20000 },
];

describe('Yellow Card Technical Assessment', () => {
  describe('ensure the shopping cart is empty when the user begins and the address is set', () => {
    const cart = NewCart(mockAddress);
    it('should return shopping cart zero items', () => {
      expect(cart.items.length).toEqual(0);
    });

    it('should return shopping carts with empty items array', () => {
      expect(cart.items).toEqual([]);
    });
  });

  describe('ensure the shopping cat instance is created given an address and a item or items', () => {
    it('should return shopping cart with address and items', () => {
      const cart = NewCart(mockAddress, mockItems);
      expect(cart.address).toEqual(mockAddress);
      expect(cart.items).toEqual(mockItems);
    });

    it('should return cart with one item', () => {
      const actualItems = mockItems.slice(0, 1);
      const cart = NewCart(mockAddress, actualItems);
      expect(cart.items.length).toEqual(1);
    });

    it('should return cart with three item', () => {
      const actualItems = mockItems.slice(0, 3);
      const cart = NewCart(mockAddress, actualItems);
      expect(cart.items.length).toEqual(3);
    });

    it('should return the province of the cart address', () => {
      const cart = NewCart(mockAddress, mockItems);
      expect(cart.address.province).toEqual(mockAddress.province);
    });
  });
});
