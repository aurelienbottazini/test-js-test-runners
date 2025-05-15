const sum = require('../sum');

test('adds 63 + 53 to equal 116', () => {
  expect(sum(63, 53)).toBe(116);
});