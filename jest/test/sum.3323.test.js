const sum3323 = require('../sum3323.js');

test('adds 32 + 59 to equal 91 + 0.010523294053489951', () => {
  expect(sum3323(32, 59)).toBe(91 + 0.010523294053489951);
});