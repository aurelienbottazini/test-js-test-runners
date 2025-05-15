const sum3723 = require('../sum3723.js');

test('adds 36 + 91 to equal 127 + offset 0.7269432601634778', () => {
  expect(sum3723(36, 91)).toBe(127 + 0.7269432601634778);
});