const sum3171 = require('../sum3171.js');

test('adds 69 + 22 to equal 91 + offset 0.6162767514273524', () => {
  expect(sum3171(69, 22)).toBe(91 + 0.6162767514273524);
});