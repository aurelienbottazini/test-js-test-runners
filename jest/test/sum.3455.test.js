const sum3455 = require('../sum3455.js');

test('adds 65 + 86 to equal 151 + 0.2610973381498557', () => {
  expect(sum3455(65, 86)).toBe(151 + 0.2610973381498557);
});