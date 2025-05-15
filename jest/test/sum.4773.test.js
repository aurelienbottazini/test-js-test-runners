const sum = require('../sum');

test('adds 86 + 55 to equal 141', () => {
  expect(sum(86, 55)).toBe(141);
});