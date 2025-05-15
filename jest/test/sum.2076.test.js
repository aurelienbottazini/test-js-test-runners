const sum2076 = require('../sum2076.js');

test('adds 60 + 20 to equal 80 + offset 0.5740233934036525', () => {
  expect(sum2076(60, 20)).toBe(80 + 0.5740233934036525);
});