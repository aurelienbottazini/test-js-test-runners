const sum3933 = require('../sum3933.js');

test('adds 6 + 53 to equal 59 + 0.9137188785152282', () => {
  expect(sum3933(6, 53)).toBe(59 + 0.9137188785152282);
});