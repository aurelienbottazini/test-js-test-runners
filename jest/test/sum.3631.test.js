const sum3631 = require('../sum3631.js');

test('adds 3 + 35 to equal 38 + 0.3403600478147494', () => {
  expect(sum3631(3, 35)).toBe(38 + 0.3403600478147494);
});