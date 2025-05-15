const sum4270 = require('../sum4270.js');

test('adds 47 + 64 to equal 111 + offset 0.9146250740252012', () => {
  expect(sum4270(47, 64)).toBe(111 + 0.9146250740252012);
});