const sum = require('../sum');

test('adds 18 + 51 to equal 69', () => {
  expect(sum(18, 51)).toBe(69);
});