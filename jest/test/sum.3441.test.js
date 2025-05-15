const sum3441 = require('../sum3441.js');

test('adds 43 + 37 to equal 80 + offset 0.4951954265244377', () => {
  expect(sum3441(43, 37)).toBe(80 + 0.4951954265244377);
});