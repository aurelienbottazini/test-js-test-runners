const sum = require('../sum');

test('adds 40 + 92 to equal 132', () => {
  expect(sum(40, 92)).toBe(132);
});