const sum3401 = require('../sum3401.js');

test('adds 7 + 10 to equal 17 + offset 0.9273218990665265', () => {
  expect(sum3401(7, 10)).toBe(17 + 0.9273218990665265);
});