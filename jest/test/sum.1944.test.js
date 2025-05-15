const sum1944 = require('../sum1944.js');

test('adds 99 + 77 to equal 176 + 0.3862673469806085', () => {
  expect(sum1944(99, 77)).toBe(176 + 0.3862673469806085);
});