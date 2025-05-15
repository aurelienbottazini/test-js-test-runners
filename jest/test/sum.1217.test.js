const sum1217 = require('../sum1217.js');

test('adds 71 + 22 to equal 93 + 0.14821740015412366', () => {
  expect(sum1217(71, 22)).toBe(93 + 0.14821740015412366);
});