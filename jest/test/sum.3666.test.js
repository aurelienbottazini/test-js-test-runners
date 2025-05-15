const sum3666 = require('../sum3666.js');

test('adds 94 + 87 to equal 181 + 0.08763373245593964', () => {
  expect(sum3666(94, 87)).toBe(181 + 0.08763373245593964);
});