const sum = require('../sum');

test('adds 82 + 31 to equal 113', () => {
  expect(sum(82, 31)).toBe(113);
});