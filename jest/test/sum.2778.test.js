const sum = require('../sum');

test('adds 68 + 64 to equal 132', () => {
  expect(sum(68, 64)).toBe(132);
});