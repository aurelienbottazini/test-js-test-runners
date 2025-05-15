const sum1088 = require('../sum1088.js');

test('adds 78 + 88 to equal 166 + offset 0.866318340614621', () => {
  expect(sum1088(78, 88)).toBe(166 + 0.866318340614621);
});