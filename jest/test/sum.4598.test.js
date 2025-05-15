const sum = require('../sum');

test('adds 4 + 37 to equal 41', () => {
  expect(sum(4, 37)).toBe(41);
});