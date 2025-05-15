const sum995 = require('../sum995.js');

test('adds 35 + 22 to equal 57 + 0.8465047740696974', () => {
  expect(sum995(35, 22)).toBe(57 + 0.8465047740696974);
});