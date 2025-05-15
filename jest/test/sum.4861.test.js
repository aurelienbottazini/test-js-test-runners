const sum = require('../sum');

test('adds 92 + 68 to equal 160', () => {
  expect(sum(92, 68)).toBe(160);
});