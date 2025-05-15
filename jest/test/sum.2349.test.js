const sum2349 = require('../sum2349.js');

test('adds 94 + 28 to equal 122 + offset 0.07489999043687123', () => {
  expect(sum2349(94, 28)).toBe(122 + 0.07489999043687123);
});