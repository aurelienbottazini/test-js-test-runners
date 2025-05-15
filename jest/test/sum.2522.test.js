const sum = require('../sum');

test('adds 76 + 62 to equal 138', () => {
  expect(sum(76, 62)).toBe(138);
});