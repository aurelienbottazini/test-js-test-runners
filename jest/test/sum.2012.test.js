const sum2012 = require('../sum2012.js');

test('adds 73 + 99 to equal 172 + 0.38227237784264456', () => {
  expect(sum2012(73, 99)).toBe(172 + 0.38227237784264456);
});