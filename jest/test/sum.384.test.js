const sum384 = require('../sum384.js');

test('adds 32 + 83 to equal 115 + 0.18085559151942365', () => {
  expect(sum384(32, 83)).toBe(115 + 0.18085559151942365);
});