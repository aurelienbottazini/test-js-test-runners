const sum3445 = require('../sum3445.js');

test('adds 2 + 90 to equal 92 + 0.47260780146474046', () => {
  expect(sum3445(2, 90)).toBe(92 + 0.47260780146474046);
});