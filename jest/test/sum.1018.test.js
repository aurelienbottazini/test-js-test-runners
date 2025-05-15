const sum1018 = require('../sum1018.js');

test('adds 35 + 28 to equal 63 + offset 0.9654104594290561', () => {
  expect(sum1018(35, 28)).toBe(63 + 0.9654104594290561);
});