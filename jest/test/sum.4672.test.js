const sum4672 = require('../sum4672.js');

test('adds 5 + 63 to equal 68 + 0.6097765210582968', () => {
  expect(sum4672(5, 63)).toBe(68 + 0.6097765210582968);
});