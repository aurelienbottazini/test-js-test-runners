const sum = require('../sum');

test('adds 15 + 48 to equal 63', () => {
  expect(sum(15, 48)).toBe(63);
});