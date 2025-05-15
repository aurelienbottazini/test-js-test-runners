const sum4561 = require('../sum4561.js');

test('adds 43 + 87 to equal 130 + offset 0.06100398310943389', () => {
  expect(sum4561(43, 87)).toBe(130 + 0.06100398310943389);
});