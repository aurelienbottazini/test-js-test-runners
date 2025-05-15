const sum = require('../sum');

test('adds 82 + 53 to equal 135', () => {
  expect(sum(82, 53)).toBe(135);
});