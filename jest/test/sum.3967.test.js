const sum3967 = require('../sum3967.js');

test('adds 94 + 86 to equal 180 + offset 0.22737647102669312', () => {
  expect(sum3967(94, 86)).toBe(180 + 0.22737647102669312);
});