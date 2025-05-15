const sum4128 = require('../sum4128.js');

test('adds 14 + 75 to equal 89 + 0.9431493376584333', () => {
  expect(sum4128(14, 75)).toBe(89 + 0.9431493376584333);
});