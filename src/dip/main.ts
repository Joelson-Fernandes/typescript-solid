/*
DIP dependency inversion principle

Módulos de alto nivel não devem depender de módulos de baixo nível. Ambos devem
depender de abstrações
Dependa de abstrações não de implementações.
Abstrações não devem depender de detalhes. Detalhes devem depender de abstrações.

Classes de baixo nivel são classes que executam tarefas (os detalhes)
Classes de alto nivel são classes que gerenciam as classes de baixo nivel.
*/
import { Order } from './entities/order';
import { ShoppingCart } from './entities/shopping';
// import { Messaging } from './services/messaging';
import { Persistency } from './services/persistency';
import { Product } from './entities/product';
import { TenPercentDiscount } from './entities/discount';
import { IndividualCustomer } from './entities/customer';
import { MessagingProtocol } from './services/interfaces/messaging-protocol';

class MessagingMock implements MessagingProtocol {
  sendMessaging(): void {
    console.log('A mensagem foi enviada pelo MOCK');
  }
}

const messagingMock = new MessagingMock();

// const fiftyPercentDiscount = new FiftyPercentDiscount();
const tenPercentDiscount = new TenPercentDiscount();
// const noDiscount = new NoDiscount();
const individualCustomer = new IndividualCustomer('joelson', 'Fernandes', '3768287547');
const cart = new ShoppingCart(tenPercentDiscount);
// const message = new Messaging();
const persistency = new Persistency();
const order = new Order(cart, messagingMock, persistency, individualCustomer);
cart.addItem(new Product('Iphone', 1.999));
cart.addItem(new Product('XboxS', 2.589));
cart.addItem(new Product('G29', 2.705));
cart.removeItem(2);
// cart.clear();
console.log(cart.total());
console.log(cart.totalWithDiscount());
console.log(cart.items);
order.checkout();
console.log(order.orderStatus);
