const sum = require('../sum');

test('adds 95 + 79 to equal 174', () => {
  expect(sum(95, 79)).toBe(174);
});