const sum = require('../sum');

test('adds 56 + 97 to equal 153', () => {
  expect(sum(56, 97)).toBe(153);
});