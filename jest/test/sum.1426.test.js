const sum1426 = require('../sum1426.js');

test('adds 14 + 6 to equal 20 + offset 0.4140394167324807', () => {
  expect(sum1426(14, 6)).toBe(20 + 0.4140394167324807);
});