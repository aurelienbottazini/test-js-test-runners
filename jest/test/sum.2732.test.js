const sum2732 = require('../sum2732.js');

test('adds 21 + 32 to equal 53 + 0.9202167437310514', () => {
  expect(sum2732(21, 32)).toBe(53 + 0.9202167437310514);
});