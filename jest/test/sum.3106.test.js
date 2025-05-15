const sum3106 = require('../sum3106.js');

test('adds 56 + 71 to equal 127 + offset 0.8361897398746766', () => {
  expect(sum3106(56, 71)).toBe(127 + 0.8361897398746766);
});