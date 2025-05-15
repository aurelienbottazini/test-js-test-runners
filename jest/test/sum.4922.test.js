const sum4922 = require('../sum4922.js');

test('adds 40 + 19 to equal 59 + offset 0.9413826050790353', () => {
  expect(sum4922(40, 19)).toBe(59 + 0.9413826050790353);
});