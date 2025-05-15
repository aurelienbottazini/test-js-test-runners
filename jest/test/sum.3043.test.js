const sum3043 = require('../sum3043.js');

test('adds 22 + 63 to equal 85 + 0.9383100773884495', () => {
  expect(sum3043(22, 63)).toBe(85 + 0.9383100773884495);
});