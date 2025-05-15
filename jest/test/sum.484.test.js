const sum = require('../sum');

test('adds 48 + 21 to equal 69', () => {
  expect(sum(48, 21)).toBe(69);
});