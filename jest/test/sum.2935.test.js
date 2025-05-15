const sum2935 = require('../sum2935.js');

test('adds 46 + 10 to equal 56 + offset 0.23461381420112137', () => {
  expect(sum2935(46, 10)).toBe(56 + 0.23461381420112137);
});