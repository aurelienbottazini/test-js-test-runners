const sum2155 = require('../sum2155.js');

test('adds 38 + 68 to equal 106 + offset 0.5238396335237708', () => {
  expect(sum2155(38, 68)).toBe(106 + 0.5238396335237708);
});