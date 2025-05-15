const sum3878 = require('../sum3878.js');

test('adds 89 + 60 to equal 149 + offset 0.3626308590636036', () => {
  expect(sum3878(89, 60)).toBe(149 + 0.3626308590636036);
});