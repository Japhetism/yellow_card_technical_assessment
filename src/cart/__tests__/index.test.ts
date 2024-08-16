import { NewCart } from '..';
import {
  validMockedAddress,
  invalidMockedAddress,
  validMockedItems,
  invalidMockedItems,
} from '../../utils/fixtures';
import { getCartValue } from '../../utils/helper';

describe('Yellow Card Technical Assessment', () => {
  describe('ensure the shopping cart is empty when the user begins and the address is set', () => {
    it('should have address set with empty shopping cart', () => {
      const cart = NewCart(validMockedAddress);
      expect(cart.address).toEqual(validMockedAddress);
      expect(cart.items).toEqual([]);
    });
  });

  describe('ensure that a user cannot submit with invalid address and/or empty cart items', () => {
    it('should be unable to submit when cart is empty', () => {
      const cart = NewCart(validMockedAddress);
      expect(cart.isCartEmpty()).toEqual(true);
      expect(cart.canSubmit()).toEqual(false);
    });

    it('should be unable to submit when cart value is zero', () => {
      const cart = NewCart(validMockedAddress, invalidMockedItems);
      expect(cart.isCartValueZero()).toEqual(true);
      expect(cart.canSubmit()).toEqual(false);
    });

    it('should be unable to submit when address is invalid', () => {
      const cart = NewCart(invalidMockedAddress, validMockedItems);
      expect(!cart.isAddressValid()).toEqual(false);
      expect(cart.canSubmit()).toEqual(false);
    });

    it('should be able to submit when there is cart item and cart item is greater than zero and a valid address', () => {
      const cart = NewCart(validMockedAddress, validMockedItems);
      expect(!cart.isAddressValid()).toEqual(true);
      expect(cart.isCartEmpty()).toEqual(false);
      expect(cart.isCartValueZero()).toEqual(false);
      expect(cart.canSubmit()).toEqual(true);
    });
  });

  describe('ensure user can see their cart value before/after tax', () => {
    const cart = NewCart(validMockedAddress, validMockedItems);
    const actualCartValueBeforeTax = getCartValue(validMockedItems);
    it('should return total cart value before tax', () => {
      expect(cart.getCartValueBeforeTax()).toEqual(actualCartValueBeforeTax);
    });

    it('should return total cart value after tax', () => {
      const actualCartValueAfterTax =
        (15 / 100) * actualCartValueBeforeTax + actualCartValueBeforeTax;
      expect(cart.getCartValueAfterTax()).toEqual(actualCartValueAfterTax);
    });
  });
});
