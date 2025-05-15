const sum90 = require('../sum90.js');

test('adds 64 + 38 to equal 102 + 0.5644445822324141', () => {
  expect(sum90(64, 38)).toBe(102 + 0.5644445822324141);
});