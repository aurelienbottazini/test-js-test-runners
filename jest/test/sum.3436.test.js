const sum3436 = require('../sum3436.js');

test('adds 21 + 13 to equal 34 + offset 0.6477760909284648', () => {
  expect(sum3436(21, 13)).toBe(34 + 0.6477760909284648);
});