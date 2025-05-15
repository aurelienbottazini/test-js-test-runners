const sum3217 = require('../sum3217.js');

test('adds 42 + 68 to equal 110 + 0.7489624600841639', () => {
  expect(sum3217(42, 68)).toBe(110 + 0.7489624600841639);
});