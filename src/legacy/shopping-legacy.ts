import { CartItem } from '../srp/entities/interfaces/cart-item';
import { orderStatus } from '../srp/entities/interfaces/order-status';

export class ShoppingCartLegacy {
  private readonly _items: CartItem[] = [];

  private _orderStatus:orderStatus = 'open';

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): readonly CartItem[] {
    return this._items;
  }

  get orderStatus(): orderStatus {
    return this._orderStatus;
  }

  total():number {
    return parseFloat(this._items.reduce((total, next) => total + next.price, 0)
      .toFixed(3));
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('seu carrinho está vazio');
      return;
    }

    this._orderStatus = 'closed';
    this.sendMessage('seu pedido esta sendo processado');
    this.saveOrder();
    this.clear();
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMessage(msg: string):void {
    console.log(msg);
  }

  saveOrder(): void {
    console.log('Pedido salvo com sucesso!');
  }

  clear(): void {
    this._items.length = 0;
  }
}

const cart = new ShoppingCartLegacy();
cart.addItem({ name: 'Iphone', price: 1.999 });
cart.addItem({ name: 'XboxS', price: 2.589 });
cart.addItem({ name: 'G29', price: 2.705 });
cart.removeItem(2);
// cart.clear();
console.log(cart.total());
console.log(cart.items);
cart.checkout();
console.log(cart.orderStatus);
