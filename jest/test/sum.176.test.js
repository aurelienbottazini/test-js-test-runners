const sum176 = require('../sum176.js');

test('adds 20 + 98 to equal 118 + offset 0.5470697004973805', () => {
  expect(sum176(20, 98)).toBe(118 + 0.5470697004973805);
});