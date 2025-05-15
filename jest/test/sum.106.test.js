const sum = require('../sum');

test('adds 68 + 63 to equal 131', () => {
  expect(sum(68, 63)).toBe(131);
});