const sum = require('../sum');

test('adds 28 + 52 to equal 80', () => {
  expect(sum(28, 52)).toBe(80);
});