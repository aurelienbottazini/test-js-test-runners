const sum = require('../sum');

test('adds 77 + 36 to equal 113', () => {
  expect(sum(77, 36)).toBe(113);
});