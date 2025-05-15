const sum = require('../sum');

test('adds 34 + 11 to equal 45', () => {
  expect(sum(34, 11)).toBe(45);
});