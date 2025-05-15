const sum = require('../sum');

test('adds 89 + 49 to equal 138', () => {
  expect(sum(89, 49)).toBe(138);
});