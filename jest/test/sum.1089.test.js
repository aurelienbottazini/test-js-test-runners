const sum1089 = require('../sum1089.js');

test('adds 1 + 69 to equal 70 + offset 0.2869466511012837', () => {
  expect(sum1089(1, 69)).toBe(70 + 0.2869466511012837);
});