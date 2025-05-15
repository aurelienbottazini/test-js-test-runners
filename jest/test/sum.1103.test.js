const sum1103 = require('../sum1103.js');

test('adds 43 + 52 to equal 95 + 0.6386854995199722', () => {
  expect(sum1103(43, 52)).toBe(95 + 0.6386854995199722);
});