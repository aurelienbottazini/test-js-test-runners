const sum4356 = require('../sum4356.js');

test('adds 48 + 38 to equal 86 + offset 0.5510733832867407', () => {
  expect(sum4356(48, 38)).toBe(86 + 0.5510733832867407);
});