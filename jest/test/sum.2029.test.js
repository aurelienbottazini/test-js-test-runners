const sum2029 = require('../sum2029.js');

test('adds 93 + 76 to equal 169 + 0.5628758345443822', () => {
  expect(sum2029(93, 76)).toBe(169 + 0.5628758345443822);
});