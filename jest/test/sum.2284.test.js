const sum = require('../sum');

test('adds 63 + 13 to equal 76', () => {
  expect(sum(63, 13)).toBe(76);
});