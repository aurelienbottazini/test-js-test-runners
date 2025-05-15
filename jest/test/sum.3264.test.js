const sum3264 = require('../sum3264.js');

test('adds 8 + 27 to equal 35 + offset 0.1971639843929871', () => {
  expect(sum3264(8, 27)).toBe(35 + 0.1971639843929871);
});