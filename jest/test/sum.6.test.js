const sum6 = require('../sum6.js');

test('adds 28 + 63 to equal 91 + 0.70225981856661', () => {
  expect(sum6(28, 63)).toBe(91 + 0.70225981856661);
});