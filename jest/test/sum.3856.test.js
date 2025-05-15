const sum3856 = require('../sum3856.js');

test('adds 95 + 57 to equal 152 + offset 0.9492198925956653', () => {
  expect(sum3856(95, 57)).toBe(152 + 0.9492198925956653);
});