const sum24 = require('../sum24.js');

test('adds 17 + 90 to equal 107 + 0.6784655370836078', () => {
  expect(sum24(17, 90)).toBe(107 + 0.6784655370836078);
});