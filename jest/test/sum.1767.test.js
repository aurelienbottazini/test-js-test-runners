const sum = require('../sum');

test('adds 54 + 18 to equal 72', () => {
  expect(sum(54, 18)).toBe(72);
});