const sum = require('../sum');

test('adds 37 + 53 to equal 90', () => {
  expect(sum(37, 53)).toBe(90);
});