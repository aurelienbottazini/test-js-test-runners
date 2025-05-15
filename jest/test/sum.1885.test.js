const sum1885 = require('../sum1885.js');

test('adds 33 + 48 to equal 81 + offset 0.13096690899847263', () => {
  expect(sum1885(33, 48)).toBe(81 + 0.13096690899847263);
});