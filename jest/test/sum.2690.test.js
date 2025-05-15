const sum = require('../sum');

test('adds 33 + 53 to equal 86', () => {
  expect(sum(33, 53)).toBe(86);
});