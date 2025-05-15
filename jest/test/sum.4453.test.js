const sum = require('../sum');

test('adds 58 + 29 to equal 87', () => {
  expect(sum(58, 29)).toBe(87);
});