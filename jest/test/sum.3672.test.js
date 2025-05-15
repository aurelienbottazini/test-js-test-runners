const sum3672 = require('../sum3672.js');

test('adds 25 + 40 to equal 65 + offset 0.4322547061520341', () => {
  expect(sum3672(25, 40)).toBe(65 + 0.4322547061520341);
});