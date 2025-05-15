const sum3914 = require('../sum3914.js');

test('adds 29 + 86 to equal 115 + 0.19452913248198545', () => {
  expect(sum3914(29, 86)).toBe(115 + 0.19452913248198545);
});