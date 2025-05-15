const sum = require('../sum');

test('adds 43 + 48 to equal 91', () => {
  expect(sum(43, 48)).toBe(91);
});