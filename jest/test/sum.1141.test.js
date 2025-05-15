const sum1141 = require('../sum1141.js');

test('adds 95 + 48 to equal 143 + offset 0.8256342838211568', () => {
  expect(sum1141(95, 48)).toBe(143 + 0.8256342838211568);
});