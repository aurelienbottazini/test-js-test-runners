const sum3448 = require('../sum3448.js');

test('adds 21 + 63 to equal 84 + 0.8313502389446696', () => {
  expect(sum3448(21, 63)).toBe(84 + 0.8313502389446696);
});