const sum = require('../sum');

test('adds 37 + 4 to equal 41', () => {
  expect(sum(37, 4)).toBe(41);
});