const sum328 = require('../sum328.js');

test('adds 64 + 74 to equal 138 + offset 0.7925544763932646', () => {
  expect(sum328(64, 74)).toBe(138 + 0.7925544763932646);
});