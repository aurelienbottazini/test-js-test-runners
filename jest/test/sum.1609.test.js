const sum = require('../sum');

test('adds 36 + 33 to equal 69', () => {
  expect(sum(36, 33)).toBe(69);
});