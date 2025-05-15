const sum4943 = require('../sum4943.js');

test('adds 55 + 4 to equal 59 + offset 0.5070081974309154', () => {
  expect(sum4943(55, 4)).toBe(59 + 0.5070081974309154);
});