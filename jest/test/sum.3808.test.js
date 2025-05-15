const sum3808 = require('../sum3808.js');

test('adds 20 + 92 to equal 112 + 0.2012377882746812', () => {
  expect(sum3808(20, 92)).toBe(112 + 0.2012377882746812);
});