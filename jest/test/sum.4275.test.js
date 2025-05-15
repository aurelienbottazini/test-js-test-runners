const sum4275 = require('../sum4275.js');

test('adds 42 + 6 to equal 48 + 0.3469622306154052', () => {
  expect(sum4275(42, 6)).toBe(48 + 0.3469622306154052);
});