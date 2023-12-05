/* eslint-disable no-empty-function */
import { orderStatus } from './interfaces/order-status';
import { Messaging } from '../services/messaging';
import { Persistency } from '../services/persistency';
import { ShoppingCart } from './shopping';

export class Order {
  private _orderStatus:orderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCart,
    private readonly message: Messaging,
    private readonly persistency: Persistency,
  ) {}

  get orderStatus(): orderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('seu carrinho está vazio');
      return;
    }

    this._orderStatus = 'closed';
    this.message.sendMessaging('seu pedido esta sendo processado');
    this.persistency.saveOrder();
    this.cart.clear();
  }
}
