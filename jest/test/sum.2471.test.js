const sum = require('../sum');

test('adds 20 + 43 to equal 63', () => {
  expect(sum(20, 43)).toBe(63);
});