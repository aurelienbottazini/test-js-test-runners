const sum4691 = require('../sum4691.js');

test('adds 61 + 29 to equal 90 + 0.048959476086424925', () => {
  expect(sum4691(61, 29)).toBe(90 + 0.048959476086424925);
});