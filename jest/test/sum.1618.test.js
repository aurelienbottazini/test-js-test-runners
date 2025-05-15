const sum1618 = require('../sum1618.js');

test('adds 71 + 88 to equal 159 + offset 0.6951476212267282', () => {
  expect(sum1618(71, 88)).toBe(159 + 0.6951476212267282);
});