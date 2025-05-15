const sum3929 = require('../sum3929.js');

test('adds 37 + 35 to equal 72 + offset 0.6184442762531119', () => {
  expect(sum3929(37, 35)).toBe(72 + 0.6184442762531119);
});