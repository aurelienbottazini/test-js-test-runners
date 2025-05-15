const sum1309 = require('../sum1309.js');

test('adds 10 + 84 to equal 94 + 0.4361331026656494', () => {
  expect(sum1309(10, 84)).toBe(94 + 0.4361331026656494);
});