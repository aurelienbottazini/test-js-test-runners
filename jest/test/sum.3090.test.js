const sum3090 = require('../sum3090.js');

test('adds 18 + 74 to equal 92 + 0.006638832493793045', () => {
  expect(sum3090(18, 74)).toBe(92 + 0.006638832493793045);
});