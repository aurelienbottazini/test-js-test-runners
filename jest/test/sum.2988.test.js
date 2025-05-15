const sum = require('../sum');

test('adds 54 + 51 to equal 105', () => {
  expect(sum(54, 51)).toBe(105);
});