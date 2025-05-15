const sum = require('../sum');

test('adds 90 + 42 to equal 132', () => {
  expect(sum(90, 42)).toBe(132);
});