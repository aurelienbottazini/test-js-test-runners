const sum3260 = require('../sum3260.js');

test('adds 33 + 77 to equal 110 + offset 0.7157726465160785', () => {
  expect(sum3260(33, 77)).toBe(110 + 0.7157726465160785);
});