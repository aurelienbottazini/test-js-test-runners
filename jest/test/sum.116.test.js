const sum = require('../sum');

test('adds 95 + 18 to equal 113', () => {
  expect(sum(95, 18)).toBe(113);
});