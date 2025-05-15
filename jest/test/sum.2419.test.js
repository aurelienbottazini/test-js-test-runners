const sum2419 = require('../sum2419.js');

test('adds 69 + 30 to equal 99 + 0.5628029617732763', () => {
  expect(sum2419(69, 30)).toBe(99 + 0.5628029617732763);
});