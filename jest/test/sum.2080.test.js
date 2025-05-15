const sum = require('../sum');

test('adds 7 + 53 to equal 60', () => {
  expect(sum(7, 53)).toBe(60);
});