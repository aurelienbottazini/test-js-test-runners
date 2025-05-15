const sum4908 = require('../sum4908.js');

test('adds 39 + 35 to equal 74 + offset 0.6386769548199394', () => {
  expect(sum4908(39, 35)).toBe(74 + 0.6386769548199394);
});