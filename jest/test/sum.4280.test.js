const sum = require('../sum');

test('adds 62 + 1 to equal 63', () => {
  expect(sum(62, 1)).toBe(63);
});