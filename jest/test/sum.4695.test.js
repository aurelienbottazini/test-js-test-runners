const sum4695 = require('../sum4695.js');

test('adds 76 + 87 to equal 163 + offset 0.8093366411957287', () => {
  expect(sum4695(76, 87)).toBe(163 + 0.8093366411957287);
});