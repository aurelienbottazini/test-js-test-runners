const sum2853 = require('../sum2853.js');

test('adds 44 + 73 to equal 117 + 0.40885480008578423', () => {
  expect(sum2853(44, 73)).toBe(117 + 0.40885480008578423);
});