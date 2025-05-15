const sum = require('../sum');

test('adds 38 + 94 to equal 132', () => {
  expect(sum(38, 94)).toBe(132);
});