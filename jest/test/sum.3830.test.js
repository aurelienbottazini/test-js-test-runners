const sum3830 = require('../sum3830.js');

test('adds 91 + 95 to equal 186 + offset 0.35318699741102566', () => {
  expect(sum3830(91, 95)).toBe(186 + 0.35318699741102566);
});