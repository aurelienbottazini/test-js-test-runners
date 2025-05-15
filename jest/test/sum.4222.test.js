const sum4222 = require('../sum4222.js');

test('adds 28 + 4 to equal 32 + 0.003764541613407224', () => {
  expect(sum4222(28, 4)).toBe(32 + 0.003764541613407224);
});