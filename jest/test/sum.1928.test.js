const sum1928 = require('../sum1928.js');

test('adds 33 + 72 to equal 105 + 0.10092472581301093', () => {
  expect(sum1928(33, 72)).toBe(105 + 0.10092472581301093);
});