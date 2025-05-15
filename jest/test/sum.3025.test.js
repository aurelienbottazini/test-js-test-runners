const sum = require('../sum');

test('adds 75 + 53 to equal 128', () => {
  expect(sum(75, 53)).toBe(128);
});