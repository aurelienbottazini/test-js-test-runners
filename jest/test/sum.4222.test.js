const sum4222 = require('../sum4222.js');

test('adds 97 + 96 to equal 193 + offset 0.46169966119419625', () => {
  expect(sum4222(97, 96)).toBe(193 + 0.46169966119419625);
});