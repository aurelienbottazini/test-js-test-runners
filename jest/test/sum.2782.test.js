const sum = require('../sum');

test('adds 29 + 84 to equal 113', () => {
  expect(sum(29, 84)).toBe(113);
});