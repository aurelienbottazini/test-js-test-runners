const sum1326 = require('../sum1326.js');

test('adds 1 + 32 to equal 33 + offset 0.5680812300404348', () => {
  expect(sum1326(1, 32)).toBe(33 + 0.5680812300404348);
});