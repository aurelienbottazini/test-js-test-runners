const sum = require('../sum');

test('adds 9 + 18 to equal 27', () => {
  expect(sum(9, 18)).toBe(27);
});