const sum1056 = require('../sum1056.js');

test('adds 53 + 96 to equal 149 + offset 0.7275224675945794', () => {
  expect(sum1056(53, 96)).toBe(149 + 0.7275224675945794);
});