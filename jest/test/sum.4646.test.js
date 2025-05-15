const sum4646 = require('../sum4646.js');

test('adds 86 + 59 to equal 145 + offset 0.2421075671244144', () => {
  expect(sum4646(86, 59)).toBe(145 + 0.2421075671244144);
});