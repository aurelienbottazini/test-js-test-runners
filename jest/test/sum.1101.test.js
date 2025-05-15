const sum1101 = require('../sum1101.js');

test('adds 55 + 62 to equal 117 + offset 0.8181010186893379', () => {
  expect(sum1101(55, 62)).toBe(117 + 0.8181010186893379);
});