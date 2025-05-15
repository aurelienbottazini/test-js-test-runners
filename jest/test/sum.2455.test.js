const sum = require('../sum');

test('adds 52 + 68 to equal 120', () => {
  expect(sum(52, 68)).toBe(120);
});