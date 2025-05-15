const sum4002 = require('../sum4002.js');

test('adds 56 + 81 to equal 137 + offset 0.7231316448758123', () => {
  expect(sum4002(56, 81)).toBe(137 + 0.7231316448758123);
});