const sum1455 = require('../sum1455.js');

test('adds 14 + 11 to equal 25 + 0.5539176114726696', () => {
  expect(sum1455(14, 11)).toBe(25 + 0.5539176114726696);
});