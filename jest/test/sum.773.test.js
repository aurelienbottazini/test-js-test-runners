const sum = require('../sum');

test('adds 51 + 62 to equal 113', () => {
  expect(sum(51, 62)).toBe(113);
});