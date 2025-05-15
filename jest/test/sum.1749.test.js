const sum1749 = require('../sum1749.js');

test('adds 82 + 71 to equal 153 + offset 0.7156225602106833', () => {
  expect(sum1749(82, 71)).toBe(153 + 0.7156225602106833);
});