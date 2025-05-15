const sum3531 = require('../sum3531.js');

test('adds 77 + 57 to equal 134 + offset 0.4343816307439765', () => {
  expect(sum3531(77, 57)).toBe(134 + 0.4343816307439765);
});