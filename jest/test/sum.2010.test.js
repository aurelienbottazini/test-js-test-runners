const sum2010 = require('../sum2010.js');

test('adds 82 + 59 to equal 141 + 0.4034263108307863', () => {
  expect(sum2010(82, 59)).toBe(141 + 0.4034263108307863);
});