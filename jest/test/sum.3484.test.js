const sum = require('../sum');

test('adds 19 + 22 to equal 41', () => {
  expect(sum(19, 22)).toBe(41);
});