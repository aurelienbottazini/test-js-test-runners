const sum3447 = require('../sum3447.js');

test('adds 95 + 26 to equal 121 + offset 0.29867815804556075', () => {
  expect(sum3447(95, 26)).toBe(121 + 0.29867815804556075);
});