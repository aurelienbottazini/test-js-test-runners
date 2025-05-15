const sum1278 = require('../sum1278.js');

test('adds 77 + 88 to equal 165 + offset 0.7104221075395751', () => {
  expect(sum1278(77, 88)).toBe(165 + 0.7104221075395751);
});