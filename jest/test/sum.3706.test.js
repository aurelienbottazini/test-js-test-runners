const sum = require('../sum');

test('adds 77 + 55 to equal 132', () => {
  expect(sum(77, 55)).toBe(132);
});