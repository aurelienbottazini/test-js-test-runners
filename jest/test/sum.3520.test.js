const sum3520 = require('../sum3520.js');

test('adds 60 + 52 to equal 112 + offset 0.7986027975616455', () => {
  expect(sum3520(60, 52)).toBe(112 + 0.7986027975616455);
});