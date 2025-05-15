const sum2705 = require('../sum2705.js');

test('adds 45 + 74 to equal 119 + offset 0.0476358833710252', () => {
  expect(sum2705(45, 74)).toBe(119 + 0.0476358833710252);
});