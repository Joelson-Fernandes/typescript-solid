/*
LISKOV SUBSTITUTION PRINCIPLE - principiu de substituição de Liskov
Se 0(x) é uma propriedade demonstravel dos objetos x de tipo T. Então 0(y)
deve ser verdadeiro para objetos y de tipO S onde S é um subtipo de T.

Simplificando: Subtipos precisam ser substituiveis por seus tipos de base.

Se meu programa espera um Animal, algo do tipo cachorro (que erda animal) deve servir
como qualquer outro animal.
*/
import { Order } from './entities/order';
import { ShoppingCart } from './entities/shopping';
import { Messaging } from './services/messaging';
import { Persistency } from './services/persistency';
import { Product } from './entities/product';
import { TenPercentDiscount } from './entities/discount';

// const fiftyPercentDiscount = new FiftyPercentDiscount();
const tenPercentDiscount = new TenPercentDiscount();
// const noDiscount = new NoDiscount();
const cart = new ShoppingCart(tenPercentDiscount);
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
