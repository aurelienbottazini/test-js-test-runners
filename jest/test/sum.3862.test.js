const sum3862 = require('../sum3862.js');

test('adds 45 + 41 to equal 86 + 0.25107435641471254', () => {
  expect(sum3862(45, 41)).toBe(86 + 0.25107435641471254);
});