const sum2211 = require('../sum2211.js');

test('adds 47 + 13 to equal 60 + 0.08783665924730721', () => {
  expect(sum2211(47, 13)).toBe(60 + 0.08783665924730721);
});