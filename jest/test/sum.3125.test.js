const sum3125 = require('../sum3125.js');

test('adds 91 + 35 to equal 126 + offset 0.23934943135682618', () => {
  expect(sum3125(91, 35)).toBe(126 + 0.23934943135682618);
});