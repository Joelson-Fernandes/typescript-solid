/* eslint-disable quotes */
/* eslint-disable no-empty-function */
import { orderStatus } from './interfaces/order-status';
import { Messaging } from '../services/messaging';
import { Persistency } from '../services/persistency';
import { ShoppingCart } from './shopping';
import { CustomerOrder } from './interfaces/customer-protocol';

export class Order {
  private _orderStatus:orderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCart,
    private readonly message: Messaging,
    private readonly persistency: Persistency,
    private readonly custumer: CustomerOrder,
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
    this.message.sendMessaging(`seu pedido com total de ${this.cart.totalWithDiscount()} esta sendo processado`);
    this.persistency.saveOrder();
    console.log('cliente: ', this.custumer.getName(), this.custumer.getIDM());
    this.cart.clear();
  }
}
