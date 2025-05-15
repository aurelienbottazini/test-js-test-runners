const sum1218 = require('../sum1218.js');

test('adds 18 + 48 to equal 66 + 0.9317651679645446', () => {
  expect(sum1218(18, 48)).toBe(66 + 0.9317651679645446);
});