const sum2345 = require('../sum2345.js');

test('adds 90 + 19 to equal 109 + 0.2546879757220053', () => {
  expect(sum2345(90, 19)).toBe(109 + 0.2546879757220053);
});