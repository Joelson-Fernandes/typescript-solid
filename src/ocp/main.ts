/*
OPEN/CLOSED PRINCIPLE
entidades devem estar abertas para extençoes mas nunca para modificações
*/
import { Order } from './entities/order';
import { ShoppingCart } from './entities/shopping';
import { Messaging } from './services/messaging';
import { Persistency } from './services/persistency';
import { Product } from './entities/product';
import { NoDiscount } from './entities/discount';

// const fiftyPercentDiscount = new FiftyPercentDiscount();
// const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
const cart = new ShoppingCart(noDiscount);
const message = new Messaging();
const persistency = new Persistency();
const order = new Order(cart, message, persistency);
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
