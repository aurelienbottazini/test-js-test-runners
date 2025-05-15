const sum2290 = require('../sum2290.js');

test('adds 17 + 31 to equal 48 + offset 0.10253314989711271', () => {
  expect(sum2290(17, 31)).toBe(48 + 0.10253314989711271);
});