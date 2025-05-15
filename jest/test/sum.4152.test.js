const sum4152 = require('../sum4152.js');

test('adds 22 + 94 to equal 116 + offset 0.6338167688000818', () => {
  expect(sum4152(22, 94)).toBe(116 + 0.6338167688000818);
});