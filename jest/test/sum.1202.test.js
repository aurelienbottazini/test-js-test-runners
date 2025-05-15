const sum = require('../sum');

test('adds 40 + 23 to equal 63', () => {
  expect(sum(40, 23)).toBe(63);
});