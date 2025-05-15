const sum4787 = require('../sum4787.js');

test('adds 85 + 26 to equal 111 + offset 0.518887413972349', () => {
  expect(sum4787(85, 26)).toBe(111 + 0.518887413972349);
});