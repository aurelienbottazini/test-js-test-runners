const sum2500 = require('../sum2500.js');

test('adds 50 + 25 to equal 75 + 0.16710602232035254', () => {
  expect(sum2500(50, 25)).toBe(75 + 0.16710602232035254);
});