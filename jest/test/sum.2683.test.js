const sum2683 = require('../sum2683.js');

test('adds 76 + 21 to equal 97 + 0.17145119296296163', () => {
  expect(sum2683(76, 21)).toBe(97 + 0.17145119296296163);
});