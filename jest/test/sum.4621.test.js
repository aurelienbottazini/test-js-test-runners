const sum4621 = require('../sum4621.js');

test('adds 64 + 5 to equal 69 + 0.2859217976556284', () => {
  expect(sum4621(64, 5)).toBe(69 + 0.2859217976556284);
});