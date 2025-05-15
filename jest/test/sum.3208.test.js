const sum3208 = require('../sum3208.js');

test('adds 54 + 68 to equal 122 + offset 0.4577080375441349', () => {
  expect(sum3208(54, 68)).toBe(122 + 0.4577080375441349);
});