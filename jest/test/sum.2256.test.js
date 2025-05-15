const sum2256 = require('../sum2256.js');

test('adds 13 + 88 to equal 101 + 0.6486404412214675', () => {
  expect(sum2256(13, 88)).toBe(101 + 0.6486404412214675);
});