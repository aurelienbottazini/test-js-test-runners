const sum = require('../sum');

test('adds 63 + 68 to equal 131', () => {
  expect(sum(63, 68)).toBe(131);
});