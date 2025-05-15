const sum = require('../sum');

test('adds 86 + 27 to equal 113', () => {
  expect(sum(86, 27)).toBe(113);
});