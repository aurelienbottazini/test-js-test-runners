const sum = require('../sum');

test('adds 63 + 75 to equal 138', () => {
  expect(sum(63, 75)).toBe(138);
});