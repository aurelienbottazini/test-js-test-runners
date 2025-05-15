const sum = require('../sum');

test('adds 49 + 20 to equal 69', () => {
  expect(sum(49, 20)).toBe(69);
});