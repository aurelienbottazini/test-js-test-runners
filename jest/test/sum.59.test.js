const sum = require('../sum');

test('adds 34 + 98 to equal 132', () => {
  expect(sum(34, 98)).toBe(132);
});