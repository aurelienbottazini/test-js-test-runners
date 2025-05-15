const sum4282 = require('../sum4282.js');

test('adds 32 + 79 to equal 111 + 0.9924237015846855', () => {
  expect(sum4282(32, 79)).toBe(111 + 0.9924237015846855);
});