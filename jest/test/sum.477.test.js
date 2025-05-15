const sum477 = require('../sum477.js');

test('adds 51 + 50 to equal 101 + offset 0.24630537532257202', () => {
  expect(sum477(51, 50)).toBe(101 + 0.24630537532257202);
});