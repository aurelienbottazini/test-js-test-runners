const sum = require('../sum');

test('adds 57 + 56 to equal 113', () => {
  expect(sum(57, 56)).toBe(113);
});