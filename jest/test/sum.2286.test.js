const sum = require('../sum');

test('adds 21 + 53 to equal 74', () => {
  expect(sum(21, 53)).toBe(74);
});