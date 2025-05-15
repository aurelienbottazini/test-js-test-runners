const sum2420 = require('../sum2420.js');

test('adds 5 + 11 to equal 16 + 0.4278696178782827', () => {
  expect(sum2420(5, 11)).toBe(16 + 0.4278696178782827);
});