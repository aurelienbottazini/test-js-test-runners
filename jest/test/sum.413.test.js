const sum = require('../sum');

test('adds 32 + 55 to equal 87', () => {
  expect(sum(32, 55)).toBe(87);
});