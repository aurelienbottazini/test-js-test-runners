const sum3289 = require('../sum3289.js');

test('adds 61 + 15 to equal 76 + offset 0.350173817463702', () => {
  expect(sum3289(61, 15)).toBe(76 + 0.350173817463702);
});