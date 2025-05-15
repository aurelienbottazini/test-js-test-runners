const sum3003 = require('../sum3003.js');

test('adds 85 + 69 to equal 154 + offset 0.8954644866139055', () => {
  expect(sum3003(85, 69)).toBe(154 + 0.8954644866139055);
});