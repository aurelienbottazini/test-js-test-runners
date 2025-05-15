const sum1255 = require('../sum1255.js');

test('adds 37 + 97 to equal 134 + offset 0.4962540742764576', () => {
  expect(sum1255(37, 97)).toBe(134 + 0.4962540742764576);
});