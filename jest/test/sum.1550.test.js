const sum1550 = require('../sum1550.js');

test('adds 34 + 91 to equal 125 + offset 0.5510893150789252', () => {
  expect(sum1550(34, 91)).toBe(125 + 0.5510893150789252);
});