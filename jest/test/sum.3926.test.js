const sum3926 = require('../sum3926.js');

test('adds 61 + 25 to equal 86 + offset 0.9783560223593989', () => {
  expect(sum3926(61, 25)).toBe(86 + 0.9783560223593989);
});