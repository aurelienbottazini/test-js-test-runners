const sum3008 = require('../sum3008.js');

test('adds 41 + 72 to equal 113 + 0.9973747936177846', () => {
  expect(sum3008(41, 72)).toBe(113 + 0.9973747936177846);
});