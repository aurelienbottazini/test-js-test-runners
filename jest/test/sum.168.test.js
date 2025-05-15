const sum = require('../sum');

test('adds 75 + 98 to equal 173', () => {
  expect(sum(75, 98)).toBe(173);
});