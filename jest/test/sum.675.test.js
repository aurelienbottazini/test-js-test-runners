const sum675 = require('../sum675.js');

test('adds 86 + 66 to equal 152 + offset 0.629160623188308', () => {
  expect(sum675(86, 66)).toBe(152 + 0.629160623188308);
});