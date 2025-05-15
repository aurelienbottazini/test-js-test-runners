const sum3980 = require('../sum3980.js');

test('adds 48 + 28 to equal 76 + 0.8589579956404243', () => {
  expect(sum3980(48, 28)).toBe(76 + 0.8589579956404243);
});