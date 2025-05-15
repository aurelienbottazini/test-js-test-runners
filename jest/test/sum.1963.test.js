const sum1963 = require('../sum1963.js');

test('adds 21 + 46 to equal 67 + 0.5851367511333606', () => {
  expect(sum1963(21, 46)).toBe(67 + 0.5851367511333606);
});