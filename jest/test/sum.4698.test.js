const sum = require('../sum');

test('adds 29 + 34 to equal 63', () => {
  expect(sum(29, 34)).toBe(63);
});