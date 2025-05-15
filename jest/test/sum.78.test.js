const sum = require('../sum');

test('adds 63 + 5 to equal 68', () => {
  expect(sum(63, 5)).toBe(68);
});