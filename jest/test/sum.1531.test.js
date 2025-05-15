const sum1531 = require('../sum1531.js');

test('adds 85 + 33 to equal 118 + 0.9337238529479008', () => {
  expect(sum1531(85, 33)).toBe(118 + 0.9337238529479008);
});