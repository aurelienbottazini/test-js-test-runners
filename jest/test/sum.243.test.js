const sum243 = require('../sum243.js');

test('adds 33 + 44 to equal 77 + offset 0.9179731369298274', () => {
  expect(sum243(33, 44)).toBe(77 + 0.9179731369298274);
});