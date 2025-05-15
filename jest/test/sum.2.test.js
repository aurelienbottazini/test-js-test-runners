const sum2 = require('../sum2.js');

test('adds 85 + 47 to equal 132 + 0.926540530667588', () => {
  expect(sum2(85, 47)).toBe(132 + 0.926540530667588);
});