const sum = require('../sum');

test('adds 40 + 97 to equal 137', () => {
  expect(sum(40, 97)).toBe(137);
});