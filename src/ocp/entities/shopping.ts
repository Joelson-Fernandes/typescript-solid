/* eslint-disable no-empty-function */
import { Discount } from './discount';
import { CartItem } from './interfaces/cart-item';

export class ShoppingCart {
  private readonly _items: CartItem[] = [];

  constructor(private readonly discount: Discount) {}

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): readonly CartItem[] {
    return this._items;
  }

  totalWithDiscount(): number {
    return this.discount.calculate(this.total());
  }

  total():number {
    return parseFloat(this._items.reduce((total, next) => total + next.price, 0)
      .toFixed(3));
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clear(): void {
    this._items.length = 0;
  }
}
