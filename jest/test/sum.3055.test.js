const sum3055 = require('../sum3055.js');

test('adds 35 + 59 to equal 94 + 0.5804509326103103', () => {
  expect(sum3055(35, 59)).toBe(94 + 0.5804509326103103);
});