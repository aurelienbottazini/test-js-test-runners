const sum36 = require('../sum36.js');

test('adds 94 + 96 to equal 190 + offset 0.5464090773535387', () => {
  expect(sum36(94, 96)).toBe(190 + 0.5464090773535387);
});