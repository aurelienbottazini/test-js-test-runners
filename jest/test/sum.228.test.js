const sum = require('../sum');

test('adds 55 + 14 to equal 69', () => {
  expect(sum(55, 14)).toBe(69);
});