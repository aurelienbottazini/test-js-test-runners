const sum = require('../sum');

test('adds 82 + 50 to equal 132', () => {
  expect(sum(82, 50)).toBe(132);
});