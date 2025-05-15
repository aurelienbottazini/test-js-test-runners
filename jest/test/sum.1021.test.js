const sum = require('../sum');

test('adds 23 + 97 to equal 120', () => {
  expect(sum(23, 97)).toBe(120);
});