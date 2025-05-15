const sum126 = require('../sum126.js');

test('adds 11 + 47 to equal 58 + 0.8118440704343978', () => {
  expect(sum126(11, 47)).toBe(58 + 0.8118440704343978);
});