const sum4970 = require('../sum4970.js');

test('adds 31 + 1 to equal 32 + 0.05017530457699371', () => {
  expect(sum4970(31, 1)).toBe(32 + 0.05017530457699371);
});