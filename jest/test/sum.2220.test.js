const sum2220 = require('../sum2220.js');

test('adds 91 + 53 to equal 144 + 0.8168143854062508', () => {
  expect(sum2220(91, 53)).toBe(144 + 0.8168143854062508);
});