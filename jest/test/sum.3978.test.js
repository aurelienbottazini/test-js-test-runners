const sum3978 = require('../sum3978.js');

test('adds 37 + 45 to equal 82 + 0.054633628633028786', () => {
  expect(sum3978(37, 45)).toBe(82 + 0.054633628633028786);
});