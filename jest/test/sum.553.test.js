const sum = require('../sum');

test('adds 76 + 37 to equal 113', () => {
  expect(sum(76, 37)).toBe(113);
});