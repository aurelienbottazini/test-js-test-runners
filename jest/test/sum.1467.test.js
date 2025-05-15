const sum1467 = require('../sum1467.js');

test('adds 80 + 73 to equal 153 + offset 0.45934271923139824', () => {
  expect(sum1467(80, 73)).toBe(153 + 0.45934271923139824);
});