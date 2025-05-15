const sum = require('../sum');

test('adds 43 + 20 to equal 63', () => {
  expect(sum(43, 20)).toBe(63);
});