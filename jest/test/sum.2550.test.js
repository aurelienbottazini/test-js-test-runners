const sum = require('../sum');

test('adds 38 + 53 to equal 91', () => {
  expect(sum(38, 53)).toBe(91);
});