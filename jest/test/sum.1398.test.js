const sum1398 = require('../sum1398.js');

test('adds 38 + 82 to equal 120 + 0.33307729918491136', () => {
  expect(sum1398(38, 82)).toBe(120 + 0.33307729918491136);
});