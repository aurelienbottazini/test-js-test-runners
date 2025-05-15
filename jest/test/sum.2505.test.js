const sum = require('../sum');

test('adds 54 + 15 to equal 69', () => {
  expect(sum(54, 15)).toBe(69);
});