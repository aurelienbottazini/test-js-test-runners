const sum3284 = require('../sum3284.js');

test('adds 28 + 83 to equal 111 + 0.012644365024523374', () => {
  expect(sum3284(28, 83)).toBe(111 + 0.012644365024523374);
});