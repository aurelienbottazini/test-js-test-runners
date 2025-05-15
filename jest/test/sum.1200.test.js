const sum1200 = require('../sum1200.js');

test('adds 15 + 16 to equal 31 + 0.029096727636306996', () => {
  expect(sum1200(15, 16)).toBe(31 + 0.029096727636306996);
});