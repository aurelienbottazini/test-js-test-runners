const sum = require('../sum');

test('adds 36 + 27 to equal 63', () => {
  expect(sum(36, 27)).toBe(63);
});