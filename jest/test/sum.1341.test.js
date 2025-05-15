const sum1341 = require('../sum1341.js');

test('adds 19 + 82 to equal 101 + offset 0.6930916698008041', () => {
  expect(sum1341(19, 82)).toBe(101 + 0.6930916698008041);
});