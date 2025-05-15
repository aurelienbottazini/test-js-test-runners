const sum = require('../sum');

test('adds 96 + 17 to equal 113', () => {
  expect(sum(96, 17)).toBe(113);
});