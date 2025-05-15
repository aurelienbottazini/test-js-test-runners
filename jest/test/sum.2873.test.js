const sum2873 = require('../sum2873.js');

test('adds 59 + 22 to equal 81 + 0.3657394576362847', () => {
  expect(sum2873(59, 22)).toBe(81 + 0.3657394576362847);
});