const sum3028 = require('../sum3028.js');

test('adds 55 + 57 to equal 112 + offset 0.5217233443216818', () => {
  expect(sum3028(55, 57)).toBe(112 + 0.5217233443216818);
});