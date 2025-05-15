const sum3679 = require('../sum3679.js');

test('adds 37 + 81 to equal 118 + offset 0.1524553998952073', () => {
  expect(sum3679(37, 81)).toBe(118 + 0.1524553998952073);
});