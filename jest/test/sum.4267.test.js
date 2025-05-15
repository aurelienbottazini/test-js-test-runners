const sum4267 = require('../sum4267.js');

test('adds 5 + 96 to equal 101 + offset 0.04432009995704367', () => {
  expect(sum4267(5, 96)).toBe(101 + 0.04432009995704367);
});