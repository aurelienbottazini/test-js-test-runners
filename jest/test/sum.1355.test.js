const sum = require('../sum');

test('adds 41 + 96 to equal 137', () => {
  expect(sum(41, 96)).toBe(137);
});