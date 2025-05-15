const sum1717 = require('../sum1717.js');

test('adds 64 + 67 to equal 131 + offset 0.5619500312165326', () => {
  expect(sum1717(64, 67)).toBe(131 + 0.5619500312165326);
});