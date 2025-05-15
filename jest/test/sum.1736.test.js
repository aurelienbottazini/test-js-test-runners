const sum = require('../sum');

test('adds 21 + 20 to equal 41', () => {
  expect(sum(21, 20)).toBe(41);
});