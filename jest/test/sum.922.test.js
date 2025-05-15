const sum922 = require('../sum922.js');

test('adds 72 + 6 to equal 78 + 0.3859362357900201', () => {
  expect(sum922(72, 6)).toBe(78 + 0.3859362357900201);
});