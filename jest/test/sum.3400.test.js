const sum3400 = require('../sum3400.js');

test('adds 28 + 28 to equal 56 + 0.31920961408165716', () => {
  expect(sum3400(28, 28)).toBe(56 + 0.31920961408165716);
});