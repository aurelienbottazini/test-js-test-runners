const sum395 = require('../sum395.js');

test('adds 9 + 69 to equal 78 + 0.8733926376112282', () => {
  expect(sum395(9, 69)).toBe(78 + 0.8733926376112282);
});