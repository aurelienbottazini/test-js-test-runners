const sum3283 = require('../sum3283.js');

test('adds 29 + 89 to equal 118 + 0.6136404500732051', () => {
  expect(sum3283(29, 89)).toBe(118 + 0.6136404500732051);
});