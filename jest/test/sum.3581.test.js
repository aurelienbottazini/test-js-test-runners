const sum = require('../sum');

test('adds 54 + 4 to equal 58', () => {
  expect(sum(54, 4)).toBe(58);
});