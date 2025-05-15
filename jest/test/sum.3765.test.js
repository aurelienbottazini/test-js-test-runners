const sum = require('../sum');

test('adds 41 + 11 to equal 52', () => {
  expect(sum(41, 11)).toBe(52);
});