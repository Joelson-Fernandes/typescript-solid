import { Order } from './entities/order';
import { ShoppingCart } from './entities/shopping';
import { Messaging } from './services/messaging';
import { Persistency } from './services/persistency';
import { Product } from './entities/product';

const cart = new ShoppingCart();
const message = new Messaging();
const persistency = new Persistency();
const order = new Order(cart, message, persistency);
cart.addItem(new Product('Iphone', 1.999));
cart.addItem(new Product('XboxS', 2.589));
cart.addItem(new Product('G29', 2.705));
cart.removeItem(2);
// cart.clear();
console.log(cart.total());
console.log(cart.items);
order.checkout();
console.log(order.orderStatus);
