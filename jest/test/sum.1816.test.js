const sum = require('../sum');

test('adds 57 + 6 to equal 63', () => {
  expect(sum(57, 6)).toBe(63);
});