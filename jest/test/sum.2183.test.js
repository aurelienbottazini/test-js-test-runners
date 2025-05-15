const sum2183 = require('../sum2183.js');

test('adds 27 + 84 to equal 111 + 0.3071733507815875', () => {
  expect(sum2183(27, 84)).toBe(111 + 0.3071733507815875);
});