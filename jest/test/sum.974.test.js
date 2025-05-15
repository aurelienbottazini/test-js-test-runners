const sum974 = require('../sum974.js');

test('adds 6 + 45 to equal 51 + offset 0.1758157357319149', () => {
  expect(sum974(6, 45)).toBe(51 + 0.1758157357319149);
});