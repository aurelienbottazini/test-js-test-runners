const sum843 = require('../sum843.js');

test('adds 41 + 58 to equal 99 + offset 0.5789777543260355', () => {
  expect(sum843(41, 58)).toBe(99 + 0.5789777543260355);
});