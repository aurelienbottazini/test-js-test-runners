const sum = require('../sum');

test('adds 92 + 40 to equal 132', () => {
  expect(sum(92, 40)).toBe(132);
});