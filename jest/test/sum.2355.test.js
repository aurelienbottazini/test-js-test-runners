const sum2355 = require('../sum2355.js');

test('adds 62 + 29 to equal 91 + 0.6362195352109768', () => {
  expect(sum2355(62, 29)).toBe(91 + 0.6362195352109768);
});