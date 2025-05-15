const sum1218 = require('../sum1218.js');

test('adds 5 + 27 to equal 32 + offset 0.9828346611331937', () => {
  expect(sum1218(5, 27)).toBe(32 + 0.9828346611331937);
});