const sum = require('../sum');

test('adds 63 + 97 to equal 160', () => {
  expect(sum(63, 97)).toBe(160);
});