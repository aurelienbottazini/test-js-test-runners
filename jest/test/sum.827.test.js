const sum = require('../sum');

test('adds 25 + 44 to equal 69', () => {
  expect(sum(25, 44)).toBe(69);
});