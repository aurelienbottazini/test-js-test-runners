const sum1995 = require('../sum1995.js');

test('adds 50 + 25 to equal 75 + 0.6631247300537711', () => {
  expect(sum1995(50, 25)).toBe(75 + 0.6631247300537711);
});