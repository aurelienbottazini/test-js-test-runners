const sum3512 = require('../sum3512.js');

test('adds 77 + 23 to equal 100 + 0.8618735256411543', () => {
  expect(sum3512(77, 23)).toBe(100 + 0.8618735256411543);
});