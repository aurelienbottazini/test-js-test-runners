const sum1025 = require('../sum1025.js');

test('adds 84 + 6 to equal 90 + offset 0.49981805321280326', () => {
  expect(sum1025(84, 6)).toBe(90 + 0.49981805321280326);
});