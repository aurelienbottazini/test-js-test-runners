const sum1244 = require('../sum1244.js');

test('adds 18 + 40 to equal 58 + 0.9818275810289342', () => {
  expect(sum1244(18, 40)).toBe(58 + 0.9818275810289342);
});