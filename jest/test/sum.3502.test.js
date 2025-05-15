const sum3502 = require('../sum3502.js');

test('adds 69 + 89 to equal 158 + offset 0.38998558689813345', () => {
  expect(sum3502(69, 89)).toBe(158 + 0.38998558689813345);
});