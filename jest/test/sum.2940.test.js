const sum2940 = require('../sum2940.js');

test('adds 28 + 65 to equal 93 + offset 0.005296103640355931', () => {
  expect(sum2940(28, 65)).toBe(93 + 0.005296103640355931);
});