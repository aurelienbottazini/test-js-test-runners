const sum1004 = require('../sum1004.js');

test('adds 65 + 20 to equal 85 + offset 0.3228925168753133', () => {
  expect(sum1004(65, 20)).toBe(85 + 0.3228925168753133);
});