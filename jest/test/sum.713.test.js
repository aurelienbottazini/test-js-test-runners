const sum713 = require('../sum713.js');

test('adds 38 + 35 to equal 73 + 0.33937423584811344', () => {
  expect(sum713(38, 35)).toBe(73 + 0.33937423584811344);
});