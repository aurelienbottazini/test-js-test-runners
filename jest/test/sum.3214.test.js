const sum3214 = require('../sum3214.js');

test('adds 81 + 25 to equal 106 + 0.9370731563675788', () => {
  expect(sum3214(81, 25)).toBe(106 + 0.9370731563675788);
});