const sum4570 = require('../sum4570.js');

test('adds 99 + 65 to equal 164 + 0.33882522647699986', () => {
  expect(sum4570(99, 65)).toBe(164 + 0.33882522647699986);
});