const sum = require('../sum');

test('adds 76 + 84 to equal 160', () => {
  expect(sum(76, 84)).toBe(160);
});