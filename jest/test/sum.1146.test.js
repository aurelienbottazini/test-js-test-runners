const sum = require('../sum');

test('adds 34 + 53 to equal 87', () => {
  expect(sum(34, 53)).toBe(87);
});