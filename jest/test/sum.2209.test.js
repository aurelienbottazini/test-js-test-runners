const sum = require('../sum');

test('adds 47 + 91 to equal 138', () => {
  expect(sum(47, 91)).toBe(138);
});