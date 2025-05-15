const sum3202 = require('../sum3202.js');

test('adds 84 + 66 to equal 150 + offset 0.3332792695752652', () => {
  expect(sum3202(84, 66)).toBe(150 + 0.3332792695752652);
});