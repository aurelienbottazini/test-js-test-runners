const sum1947 = require('../sum1947.js');

test('adds 23 + 9 to equal 32 + 0.99809275424399', () => {
  expect(sum1947(23, 9)).toBe(32 + 0.99809275424399);
});