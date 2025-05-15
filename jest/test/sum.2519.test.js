const sum = require('../sum');

test('adds 25 + 53 to equal 78', () => {
  expect(sum(25, 53)).toBe(78);
});