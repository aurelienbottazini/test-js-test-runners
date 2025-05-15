const sum2827 = require('../sum2827.js');

test('adds 92 + 35 to equal 127 + offset 0.15320439065790303', () => {
  expect(sum2827(92, 35)).toBe(127 + 0.15320439065790303);
});