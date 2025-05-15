const sum2209 = require('../sum2209.js');

test('adds 2 + 84 to equal 86 + 0.5366205378740094', () => {
  expect(sum2209(2, 84)).toBe(86 + 0.5366205378740094);
});