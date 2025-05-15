const sum = require('../sum');

test('adds 33 + 36 to equal 69', () => {
  expect(sum(33, 36)).toBe(69);
});