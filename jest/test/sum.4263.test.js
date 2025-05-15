const sum = require('../sum');

test('adds 68 + 53 to equal 121', () => {
  expect(sum(68, 53)).toBe(121);
});