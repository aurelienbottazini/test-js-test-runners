const sum = require('../sum');

test('adds 67 + 53 to equal 120', () => {
  expect(sum(67, 53)).toBe(120);
});