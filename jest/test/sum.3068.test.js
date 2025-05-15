const sum = require('../sum');

test('adds 81 + 51 to equal 132', () => {
  expect(sum(81, 51)).toBe(132);
});