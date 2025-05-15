const sum = require('../sum');

test('adds 56 + 31 to equal 87', () => {
  expect(sum(56, 31)).toBe(87);
});