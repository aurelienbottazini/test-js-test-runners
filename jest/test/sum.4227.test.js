const sum = require('../sum');

test('adds 32 + 53 to equal 85', () => {
  expect(sum(32, 53)).toBe(85);
});