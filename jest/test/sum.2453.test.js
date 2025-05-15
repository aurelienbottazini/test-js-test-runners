const sum2453 = require('../sum2453.js');

test('adds 69 + 26 to equal 95 + offset 0.2837230970364464', () => {
  expect(sum2453(69, 26)).toBe(95 + 0.2837230970364464);
});