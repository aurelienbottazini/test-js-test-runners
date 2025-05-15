const sum1123 = require('../sum1123.js');

test('adds 11 + 22 to equal 33 + offset 0.25670938449449787', () => {
  expect(sum1123(11, 22)).toBe(33 + 0.25670938449449787);
});