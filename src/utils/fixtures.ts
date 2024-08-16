import { IAddress, IItem } from '../types';

const addressTemplates = {
  valid: {
    street: 'Plot 4, Lagos',
    code: 11001,
    province: 'Lagos',
    city: 'Yaba',
  },
  invalid: { street: '', code: 11001, province: '', city: '' },
};

const itemTemplates = {
  withPrice: [
    { name: 'office chair', price: 10 },
    { name: 'office table', price: 50 },
  ],
  withoutPrice: [
    { name: 'office chair', price: 0 },
    { name: 'office table', price: 0 },
  ],
};

export const getMockedAddress = (isValid: boolean): IAddress =>
  isValid ? addressTemplates.valid : addressTemplates.invalid;

export const getMockedItems = (hasPrice: boolean): IItem[] =>
  hasPrice ? itemTemplates.withPrice : itemTemplates.withoutPrice;

export const validMockedAddress = getMockedAddress(true);
export const invalidMockedAddress = getMockedAddress(false);
export const validMockedItems = getMockedItems(true);
export const invalidMockedItems = getMockedItems(false);
