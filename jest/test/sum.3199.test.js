const sum3199 = require('../sum3199.js');

test('adds 6 + 61 to equal 67 + offset 0.9465737936537516', () => {
  expect(sum3199(6, 61)).toBe(67 + 0.9465737936537516);
});