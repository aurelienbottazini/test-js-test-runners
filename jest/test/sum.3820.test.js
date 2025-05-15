const sum3820 = require('../sum3820.js');

test('adds 89 + 61 to equal 150 + offset 0.7056697368410835', () => {
  expect(sum3820(89, 61)).toBe(150 + 0.7056697368410835);
});