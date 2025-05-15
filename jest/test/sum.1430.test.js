const sum1430 = require('../sum1430.js');

test('adds 57 + 77 to equal 134 + 0.2088312392567202', () => {
  expect(sum1430(57, 77)).toBe(134 + 0.2088312392567202);
});