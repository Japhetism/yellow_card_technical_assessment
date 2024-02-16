import { IAddress, IItem } from '../types';

export class Cart {
  public address: IAddress;
  public items: IItem[];
  constructor(address: IAddress, items?: IItem[]) {
    this.address = address;
    this.items = items || [];
  }
}

export const NewCart = (address: IAddress, items?: IItem[]): Cart =>
  new Cart(address, items);
