const sum3423 = require('../sum3423.js');

test('adds 55 + 63 to equal 118 + 0.07093873561556996', () => {
  expect(sum3423(55, 63)).toBe(118 + 0.07093873561556996);
});