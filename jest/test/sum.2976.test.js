const sum2976 = require('../sum2976.js');

test('adds 91 + 61 to equal 152 + offset 0.5851886129361593', () => {
  expect(sum2976(91, 61)).toBe(152 + 0.5851886129361593);
});