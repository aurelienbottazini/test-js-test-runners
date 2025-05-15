const sum4099 = require('../sum4099.js');

test('adds 8 + 80 to equal 88 + offset 0.502375645374672', () => {
  expect(sum4099(8, 80)).toBe(88 + 0.502375645374672);
});