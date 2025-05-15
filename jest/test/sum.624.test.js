const sum624 = require('../sum624.js');

test('adds 73 + 47 to equal 120 + 0.4132910577666734', () => {
  expect(sum624(73, 47)).toBe(120 + 0.4132910577666734);
});