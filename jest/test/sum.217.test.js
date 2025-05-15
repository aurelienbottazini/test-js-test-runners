const sum = require('../sum');

test('adds 98 + 34 to equal 132', () => {
  expect(sum(98, 34)).toBe(132);
});