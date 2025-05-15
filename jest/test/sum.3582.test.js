const sum = require('../sum');

test('adds 4 + 14 to equal 18', () => {
  expect(sum(4, 14)).toBe(18);
});