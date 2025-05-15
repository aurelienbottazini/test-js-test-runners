const sum3497 = require('../sum3497.js');

test('adds 21 + 88 to equal 109 + offset 0.4731950376824805', () => {
  expect(sum3497(21, 88)).toBe(109 + 0.4731950376824805);
});