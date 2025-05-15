const sum = require('../sum');

test('adds 66 + 3 to equal 69', () => {
  expect(sum(66, 3)).toBe(69);
});