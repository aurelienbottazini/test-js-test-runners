const sum = require('../sum');

test('adds 99 + 75 to equal 174', () => {
  expect(sum(99, 75)).toBe(174);
});