const sum803 = require('../sum803.js');

test('adds 26 + 12 to equal 38 + offset 0.7152026789350924', () => {
  expect(sum803(26, 12)).toBe(38 + 0.7152026789350924);
});