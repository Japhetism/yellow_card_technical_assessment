import { IAddress, IItem } from '../types';
import { getCartValue } from '../utils/helper';

export class Cart {
  public address: IAddress;
  public items: IItem[];
  constructor(address: IAddress, items?: IItem[]) {
    this.address = address;
    this.items = items || [];
  }

  public isAddressValid(): boolean {
    return !this.address.street || !this.address.province || !this.address.city;
  }

  public isCartEmpty(): boolean {
    return !this.items.length;
  }

  public isCartValueZero(): boolean {
    return getCartValue(this.items) === 0;
  }

  public canSubmit(): boolean {
    return (
      !this.isAddressValid() && !this.isCartEmpty() && !this.isCartValueZero()
    );
  }

  public getCartValueBeforeTax(): number {
    return getCartValue(this.items);
  }

  public getCartValueAfterTax(): number {
    const cartValue = this.getCartValueBeforeTax();
    const tax = cartValue * (15 / 100);
    return cartValue + tax;
  }
}

export const NewCart = (address: IAddress, items?: IItem[]): Cart =>
  new Cart(address, items);
