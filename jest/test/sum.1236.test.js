const sum1236 = require('../sum1236.js');

test('adds 96 + 50 to equal 146 + 0.3284850269885453', () => {
  expect(sum1236(96, 50)).toBe(146 + 0.3284850269885453);
});