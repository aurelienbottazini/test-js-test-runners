const sum3587 = require('../sum3587.js');

test('adds 92 + 20 to equal 112 + offset 0.17394768678804573', () => {
  expect(sum3587(92, 20)).toBe(112 + 0.17394768678804573);
});