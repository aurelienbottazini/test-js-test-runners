const sum2313 = require('../sum2313.js');

test('adds 10 + 37 to equal 47 + 0.8758261928489635', () => {
  expect(sum2313(10, 37)).toBe(47 + 0.8758261928489635);
});