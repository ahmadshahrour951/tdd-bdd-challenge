const mocha = require('mocha');
const chai = require('chai');
const utils = require('../utils');
const expect = chai.expect;

// ========================================================
// NOTE: https://mochajs.org/#arrow-functions
// Passing arrow functions (“lambdas”) to Mocha is discouraged.
// Lambdas lexically bind this and cannot access the Mocha context.
// ========================================================

it('should say hello', function () {
  const hello = utils.sayHello();
  expect(hello).to.be.a('string');
  expect(hello).to.equal('Hello');
  expect(hello).with.lengthOf(5);
});

// ========================================================
// Level 1 Challenges
// 1. Write the pending tests check that they are pending, like this:
//    it("should do something that you want done")
// 2. Next, write the test and see that it fails.
// 3. Write the code in the utils.js file to make the test pass.
// 4. Finally see if you would like to refactor your code at all.
// This is called "Red-Green-Refactor"
// ========================================================
it('should return the area of a rectangle', function () {
  const area_0 = utils.area(5, 10);
  expect(area_0, '5 * 10 = 50').to.equal(50).that.is.a('number');

  const area_1 = utils.area(0, 0);
  expect(area_1, '0 * 0 = 0').to.equal(0).that.is.a('number');

  const area_2 = utils.area(1, 1);
  expect(area_2, '1 * 1 = 1').to.equal(1).that.is.a('number');
});

it('should return the perimeter of a quadrilateral', function () {
  const perimeter_0 = utils.perimeter(5, 10);
  expect(perimeter_0, '5 + 5 + 10 + 10 = 30').to.equal(30).that.is.a('number');

  const perimeter_1 = utils.perimeter(0, 0);
  expect(perimeter_1, '0 + 0 + 0 + 0 = 0').to.equal(0).that.is.a('number');

  const perimeter_2 = utils.perimeter(1, 1);
  expect(perimeter_2, '1 + 1 + 1 + 1 = 4').to.equal(4).that.is.a('number');
});

it('should return the area of a circle', function () {
  const circleArea_0 = utils.circleArea(5);
  expect(circleArea_0, 'pi * 5 * 5 = 78.539.....')
    .to.be.closeTo(78.5398, 0.0001)
    .that.is.a('number');

  const circleArea_1 = utils.circleArea(0);
  expect(circleArea_1, 'pi * 0 * 0 = 0').to.equal(0).that.is.a('number');

  const circleArea_2 = utils.circleArea(1);
  expect(circleArea_2, 'pi * 1 * 1 = pi').to.equal(Math.PI).that.is.a('number');
});

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: The following unimplemented test cases are examples
// of "Pending Tests" in Chai. Someone should write these
// tests eventually.
// ========================================================

beforeEach((done) => {
  utils.clearCart();
  done();
});

it('Should create a new (object) Item with name and price', function () {
  const item = utils.createItem('apple', 0.99);
  expect(item).to.be.a('object');
  expect(item).to.have.property('name', 'apple');
  expect(item).to.have.property('price', 0.99);
  expect(item).to.have.property('quantity', 1);
});

it('Should return an array containing all items in cart', function () {
  const cart = utils.getShoppingCart();
  expect(cart).to.be.an('array');
  expect(cart).to.be.empty;
});

it('Should add a new item to the shopping cart', function () {
  const item = utils.createItem('apple', 0.99);
  utils.addItemToCart(item);
  const cart = utils.getShoppingCart();

  expect(cart).to.be.an('array');
  expect(cart).to.have.lengthOf(1);
  expect(cart[0]).to.equal(item);
});

it('Should return the number of items in the cart', function () {
  let cartLength = utils.getNumItemsInCart();

  expect(cartLength).to.be.a('number');
  expect(cartLength).to.equal(0);

  const item_1 = utils.createItem('apple', 0.99);
  const item_2 = utils.createItem('banana', 2.99);
  const item_3 = utils.createItem('orange', 1.99);

  utils.addItemToCart(item_1);
  utils.addItemToCart(item_2);
  utils.addItemToCart(item_3);

  cartLength = utils.getNumItemsInCart();

  expect(cartLength).to.be.a('number');
  expect(cartLength).to.equal(3);
});

it('Should remove items from cart', function () {
  const item_1 = utils.createItem('apple', 0.99);
  const item_2 = utils.createItem('banana', 2.99);
  const item_3 = utils.createItem('orange', 1.99);

  utils.addItemToCart(item_1);
  utils.addItemToCart(item_2);
  utils.addItemToCart(item_3);

  utils.removeItemFromCart(item_1);
  let cartLength = utils.getNumItemsInCart();
  expect(cartLength).to.equal(2);
  let cart = utils.getShoppingCart();
  expect(cart).to.have.members([item_2, item_3]);

  utils.removeItemFromCart(item_2);
  cartLength = utils.getNumItemsInCart();
  expect(cartLength).to.equal(1);
  cart = utils.getShoppingCart();
  expect(cart).to.have.members([item_3]);

  utils.removeItemFromCart(item_3);
  cartLength = utils.getNumItemsInCart();
  expect(cartLength).to.equal(0);
  expect(cart).to.be.empty;
});

// ========================================================
// Stretch Challenges
// ========================================================

it('Should update the count of items in the cart');

it('Should validate that an empty cart has 0 items');

it('Should return the total cost of all items in the cart');
