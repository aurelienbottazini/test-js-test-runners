const sum = require('../sum');

test('adds 53 + 97 to equal 150', () => {
  expect(sum(53, 97)).toBe(150);
});