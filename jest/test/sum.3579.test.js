const sum3579 = require('../sum3579.js');

test('adds 73 + 84 to equal 157 + offset 0.34703460123713337', () => {
  expect(sum3579(73, 84)).toBe(157 + 0.34703460123713337);
});