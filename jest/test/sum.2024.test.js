const sum2024 = require('../sum2024.js');

test('adds 26 + 47 to equal 73 + offset 0.02215090321284896', () => {
  expect(sum2024(26, 47)).toBe(73 + 0.02215090321284896);
});