const sum3385 = require('../sum3385.js');

test('adds 88 + 83 to equal 171 + offset 0.05533674000071498', () => {
  expect(sum3385(88, 83)).toBe(171 + 0.05533674000071498);
});