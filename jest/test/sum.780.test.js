const sum = require('../sum');

test('adds 37 + 32 to equal 69', () => {
  expect(sum(37, 32)).toBe(69);
});