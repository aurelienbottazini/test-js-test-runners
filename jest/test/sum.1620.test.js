const sum1620 = require('../sum1620.js');

test('adds 3 + 61 to equal 64 + 0.6079208923925447', () => {
  expect(sum1620(3, 61)).toBe(64 + 0.6079208923925447);
});