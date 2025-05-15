const sum77 = require('../sum77.js');

test('adds 46 + 15 to equal 61 + offset 0.2645467608646739', () => {
  expect(sum77(46, 15)).toBe(61 + 0.2645467608646739);
});