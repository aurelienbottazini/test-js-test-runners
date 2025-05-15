const sum3609 = require('../sum3609.js');

test('adds 33 + 64 to equal 97 + 0.5793984402096901', () => {
  expect(sum3609(33, 64)).toBe(97 + 0.5793984402096901);
});