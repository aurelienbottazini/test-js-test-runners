const sum3906 = require('../sum3906.js');

test('adds 26 + 48 to equal 74 + 0.5480941175998861', () => {
  expect(sum3906(26, 48)).toBe(74 + 0.5480941175998861);
});