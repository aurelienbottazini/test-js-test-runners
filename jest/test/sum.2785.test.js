const sum = require('../sum');

test('adds 32 + 37 to equal 69', () => {
  expect(sum(32, 37)).toBe(69);
});