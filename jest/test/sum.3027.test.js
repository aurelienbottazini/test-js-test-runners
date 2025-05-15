const sum3027 = require('../sum3027.js');

test('adds 70 + 42 to equal 112 + offset 0.9627052732067427', () => {
  expect(sum3027(70, 42)).toBe(112 + 0.9627052732067427);
});