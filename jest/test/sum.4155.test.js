const sum4155 = require('../sum4155.js');

test('adds 32 + 20 to equal 52 + offset 0.18615666453730584', () => {
  expect(sum4155(32, 20)).toBe(52 + 0.18615666453730584);
});