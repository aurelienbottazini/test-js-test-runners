const sum3864 = require('../sum3864.js');

test('adds 98 + 37 to equal 135 + offset 0.43023180330081034', () => {
  expect(sum3864(98, 37)).toBe(135 + 0.43023180330081034);
});