const sum4787 = require('../sum4787.js');

test('adds 70 + 1 to equal 71 + 0.8887039812650026', () => {
  expect(sum4787(70, 1)).toBe(71 + 0.8887039812650026);
});