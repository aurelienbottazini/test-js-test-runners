const sum = require('../sum');

test('adds 21 + 84 to equal 105', () => {
  expect(sum(21, 84)).toBe(105);
});