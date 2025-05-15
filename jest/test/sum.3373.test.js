const sum3373 = require('../sum3373.js');

test('adds 58 + 22 to equal 80 + 0.6553734579564521', () => {
  expect(sum3373(58, 22)).toBe(80 + 0.6553734579564521);
});