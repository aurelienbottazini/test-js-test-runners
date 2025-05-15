const sum3717 = require('../sum3717.js');

test('adds 61 + 8 to equal 69 + offset 0.6089952077378772', () => {
  expect(sum3717(61, 8)).toBe(69 + 0.6089952077378772);
});