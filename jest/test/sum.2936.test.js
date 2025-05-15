const sum = require('../sum');

test('adds 63 + 50 to equal 113', () => {
  expect(sum(63, 50)).toBe(113);
});