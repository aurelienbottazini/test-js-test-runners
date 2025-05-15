const sum1257 = require('../sum1257.js');

test('adds 18 + 25 to equal 43 + 0.9813118675322396', () => {
  expect(sum1257(18, 25)).toBe(43 + 0.9813118675322396);
});