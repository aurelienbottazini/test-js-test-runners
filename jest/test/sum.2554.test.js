const sum = require('../sum');

test('adds 64 + 28 to equal 92', () => {
  expect(sum(64, 28)).toBe(92);
});