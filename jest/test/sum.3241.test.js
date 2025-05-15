const sum3241 = require('../sum3241.js');

test('adds 94 + 34 to equal 128 + offset 0.3701342297248169', () => {
  expect(sum3241(94, 34)).toBe(128 + 0.3701342297248169);
});