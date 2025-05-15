const sum3081 = require('../sum3081.js');

test('adds 28 + 64 to equal 92 + offset 0.16393944857355036', () => {
  expect(sum3081(28, 64)).toBe(92 + 0.16393944857355036);
});