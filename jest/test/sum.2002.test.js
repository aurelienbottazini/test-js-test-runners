const sum2002 = require('../sum2002.js');

test('adds 24 + 10 to equal 34 + 0.9237822038566591', () => {
  expect(sum2002(24, 10)).toBe(34 + 0.9237822038566591);
});