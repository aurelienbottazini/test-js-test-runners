const sum = require('../sum');

test('adds 77 + 84 to equal 161', () => {
  expect(sum(77, 84)).toBe(161);
});