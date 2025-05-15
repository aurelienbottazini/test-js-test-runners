const sum646 = require('../sum646.js');

test('adds 77 + 77 to equal 154 + 0.9626679368561051', () => {
  expect(sum646(77, 77)).toBe(154 + 0.9626679368561051);
});