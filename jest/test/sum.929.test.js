const sum929 = require('../sum929.js');

test('adds 32 + 98 to equal 130 + offset 0.8918203481045431', () => {
  expect(sum929(32, 98)).toBe(130 + 0.8918203481045431);
});