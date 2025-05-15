const sum = require('../sum');

test('adds 29 + 53 to equal 82', () => {
  expect(sum(29, 53)).toBe(82);
});