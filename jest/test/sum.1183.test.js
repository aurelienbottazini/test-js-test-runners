const sum1183 = require('../sum1183.js');

test('adds 56 + 66 to equal 122 + 0.9007615877345492', () => {
  expect(sum1183(56, 66)).toBe(122 + 0.9007615877345492);
});