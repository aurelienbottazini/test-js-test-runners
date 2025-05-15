const sum2512 = require('../sum2512.js');

test('adds 24 + 47 to equal 71 + 0.4587468141651103', () => {
  expect(sum2512(24, 47)).toBe(71 + 0.4587468141651103);
});