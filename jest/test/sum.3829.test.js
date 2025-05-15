const sum = require('../sum');

test('adds 59 + 4 to equal 63', () => {
  expect(sum(59, 4)).toBe(63);
});